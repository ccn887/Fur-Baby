import { combineReducers } from 'redux'
// import walks from './walks';
import furbabies from './furbabies';
import trackers from './trackers';
import user from './user';
import scrapbook from './scrapbook';


// import scrapbooks from './scrapbooks';

export default combineReducers({
  // walks,
  furbabies,
  trackers,
  user,
  scrapbook
});

// export * from './walks';
export * from './furbabies';
export * from './trackers';
export * from './user';

export * from './scrapbook';
