import firebase from '../../src/fire';


// ACTION TYPES

const GET_TRACKERS = 'GET_TRACKERS';
const UPDATE_TRACKER = 'UPDATE_TRACKER';
const ADD_TRACKER = 'ADD_TRACKER ';
const DELETE_TRACKER = 'DELETE_TRACKER';

// ACTION CREATORS


// export function getTrackersCreator(trackers) {
//   const action = { type: GET_TRACKERS, trackers };
//   return action;
// }

export function addTrackerCreator(tracker) {
  const action = { type: ADD_TRACKER, tracker };
  return action;
}
export function updateTrackerCreator(tracker) {
  const action = { type: UPDATE_TRACKER, tracker };
  return action;
}

export function deleteTrackerCreator(id) {
  const action = { type: DELETE_TRACKER, id };
  return action;
}

// REDUCER
export default function reducer(trackers = [], action) {

  switch (action.type) {

    case GET_TRACKERS:
      return action.trackers;

    case ADD_TRACKER:
      trackers[action.tracker.id] = action.tracker;
      return trackers;

    case UPDATE_TRACKER:
      return trackers.map(tracker => (action.tracker.id === tracker.id ? action.tracker : tracker));

    case DELETE_TRACKER:
      return trackers.filter(tracker => tracker.id !== action.id);

    default:
      return trackers;
  }

}
//Dispatchers
// export const getTrackers = () => dispatch => {
//     const trackersRef = firebase.database()
//     .ref('trackers')
//     .on('value', (snapshot) => {
//       dispatch(getTrackersCreator(snapshot.val()))})}


export const addTracker = (tracker) => dispatch => {
  firebase.database().ref('trackers').push(tracker);
 dispatch(addTrackerCreator(tracker))
}


export const updateTracker = (id, tracker) => dispatch => {
  dispatch(updateTrackerCreator(tracker))
 // update in Tracker here?
}
export const deleteTracker = (id) => dispatch => {
  dispatch(deleteTrackerCreator(id));
  //delete in Tracker here?
}

