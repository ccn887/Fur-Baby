import firebase from '../../src/fire';
import axios from 'axios'

// ACTION TYPES

const ADD_IMAGE = 'ADD_IMAGE';
const GET_IMAGES = 'GET_IMAGES';


// const ADD_PHOTO = 'ADD_PHOTO';

// ACTION CREATORS


export function addImageCreator(image) {
  const action = { type: ADD_IMAGE, image};
  return action;
}
export function getImagesCreator(images) {
  const action = { type: GET_IMAGES, images };
  return action;
}
// export function addPhotoCreator() {
//   const action = { type: ADD_PHOTO, photo };
//   return action;
// }

// REDUCER
export default function reducer(scrapbook = [], action) {

  switch (action.type) {

    case GET_IMAGES:
      return action.images;

    case ADD_IMAGE:
      return [...scrapbook, action.image]

    default:
      return scrapbook;
  }

}
//Dispatchers

export const getImages = () => dispatch => {
  const imagesRef = firebase.database()
  .ref('images')
  .on('value', (snapshot) => {
    dispatch(getImagesCreator(snapshot.val()))
  })
};

export const addImage = (file) => dispatch => {
  console.log('got to axios image', file)
  const imagesRef = firebase.database().ref('images');
  const fd = new FormData();
  fd.append("upload_preset", 'jwsfhasx');
  fd.append("file", file);
  const header = {
    headers: { "X-Requested-With": "XMLHttpRequest" },
  };
  axios.post('https://api.cloudinary.com/v1_1/dygw8tvry/upload', fd, header)
    .then(res => {
      imagesRef.push(res.data);
      dispatch(addImageCreator(res.data))})
    .catch(err => console.log(`Could not post image:`, err))
}
