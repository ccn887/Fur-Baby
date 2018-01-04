import firebase, { auth, provider } from '../../src/fire';


// ACTION TYPES

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_USER = 'SET_USER';



// ACTION CREATORS


export function loginCreator(user) {
  console.log('got to action creator')
  const action = { type: LOGIN, user };
  return action;
}

export function setUserCreator(user) {
  console.log('got to action creator')
  const action = { type: SET_USER, user }
  return action;
}

export function logoutCreator() {
  const action = { type: LOGOUT};
  return action;
}


// REDUCER
export default function reducer(user = null, action) {

  switch (action.type) {

    case LOGIN:
      return action.user;
     case SET_USER:
      return action.user;
    case LOGOUT:
      return null;

    default:
      return null;
  }

}
//Dispatchers
export const login = () => dispatch => {
  auth.signInWithPopup(provider)
  .then((result) => {
    const authuser = result.user;
    const usery = firebase.auth().currentUser
    console.log('routesuser:', usery)
    dispatch(loginCreator(authuser))
  })
};

export const setUser = () => dispatch => {
auth.onAuthStateChanged((user) => {
if (user) {
  dispatch(setUserCreator(user))
}
  })
};

export const logout = () => dispatch => {
  auth.signOut()
    .then(() => {
 dispatch(logoutCreator())
})
}
