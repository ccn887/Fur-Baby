import firebase, { auth, provider } from '../../src/fire';


// ACTION TYPES

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const GET_USER = 'GET_USER';



// ACTION CREATORS


export function loginCreator(user) {
  console.log('got to action creator')
  const action = { type: LOGIN, user };
  return action;
}

export function getUserCreator() {
  console.log('got to action creator')
  const action = { type: GET_USER }
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
      case GET_USER:
      return user;
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

export const getUser = () => dispatch => {

      dispatch(getUserCreator())
};

export const logout = () => dispatch => {
  auth.signOut()
    .then(() => {
 dispatch(logoutCreator())
})
}
