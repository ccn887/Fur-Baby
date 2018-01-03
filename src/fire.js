import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyBwNZytSDgZk0zdxd06hOvCEPfhJGNbYkc",
  authDomain: "fur-baby.firebaseapp.com",
  databaseURL: "https://fur-baby.firebaseio.com",
  projectId: "fur-baby",
  storageBucket: "",
  messagingSenderId: "996048700731"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
