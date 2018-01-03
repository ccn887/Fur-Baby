import firebase from '../../src/fire';


// ACTION TYPES

const GET_FBS = 'GET_FBS';
const UPDATE_FB = 'UPDATE_FB';
const ADD_FB = 'ADD_FB ';
const DELETE_FB = 'DELETE_FB';

// ACTION CREATORS


export function getFbsCreator(fbs) {
  const action = { type: GET_FBS, fbs };
  return action;
}

export function addFbCreator(fb) {
  const action = { type: ADD_FB, fb };
  return action;
}
export function updateFbCreator(fb) {
  const action = { type: UPDATE_FB, fb };
  return action;
}

export function deleteFbCreator(id) {
  const action = { type: DELETE_FB, id };
  return action;
}

// REDUCER
export default function reducer(fbs = [], action) {

  switch (action.type) {

    case GET_FBS:
      return action.fbs;

    case ADD_FB:
      fbs[action.fb.id] = action.fb;
      return fbs;

    case UPDATE_FB:
      return fbs.map(fb => (action.fb.id === fb.id ? action.fb : fb));

    case DELETE_FB:
      return fbs.filter(fb => fb.id !== action.id);

    default:
      return fbs;
  }

}
//Dispatchers
export const getFbs = () => dispatch => {
    const fbsRef = firebase.database()
    .ref('fbs')
    .on('value', (snapshot) => {
      dispatch(getFbsCreator(snapshot.val()))
    })

};


export const addFb = (fb) => dispatch => {
  const fbsRef = firebase.database().ref('fbs');
  fbsRef.push(fb);
 dispatch(addFbCreator(fb))
}


export const updateFb = (id, fb) => dispatch => {
  dispatch(updateFbCreator(fb))
 // update in fb here?
}
export const deleteFb = (id) => dispatch => {
  dispatch(deleteFbCreator(id));
  //delete in fb here?
}
