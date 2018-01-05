import firebase from '../../src/fire';
import axios from 'axios'

// ACTION TYPES

const ADD_IMAGE = 'ADD_IMAGE';
const GET_IMAGES = 'GET_IMAGES';
const ADD_PAGE = 'ADD_PAGE';


// const ADD_PHOTO = 'ADD_PHOTO';

// ACTION CREATORS


export function addImageCreator(image) {
  const action = { type: ADD_IMAGE, image};
  return action;
}
export function addPageCreator(page) {
  const action = { type: ADD_PAGE, page};
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
      case ADD_PAGE:
      return [...scrapbook, action.page]

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

export const addImage = (file, style, fbid, pageid) => dispatch => {
  //style b & white = 'jwsfhasx'
  console.log('got to axios image', file)
  const fbsRef = firebase.database().ref(`fbs/${fbid}/Pages/${pageid}/images`);
  const fd = new FormData();
  fd.append("upload_preset", style);
  fd.append("file", file);
  const header = {
    headers: { "X-Requested-With": "XMLHttpRequest" },
  };
  axios.post('https://api.cloudinary.com/v1_1/dygw8tvry/upload', fd, header)
    .then(res => {
      fbsRef.push(res.data)
      dispatch(addImageCreator(res.data))})
    .catch(err => console.log(`Could not post image:`, err))
}

export const addpageId = (fbid, pageid) => dispatch =>{
  const fbsRefPage = firebase.database().ref(`fbs/${fbid}/Pages/${pageid}`);
  fbsRefPage.set('images')
  dispatch(addImageCreator(pageid))
}
  export const addCaption = (fbid, pageid, imageid, caption)  => dispatch => {
    const fbsImagesRef = firebase.database().ref(`fbs/${fbid}/Pages/${pageid}/images/${imageid}`);
      fbsImagesRef.update({ caption: { date: `${caption.date}`, title: `${caption.title}`, caption:`${caption.caption}` }})
      dispatch(addImageCreator(pageid))
    }

