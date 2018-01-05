import { combineReducers } from 'redux'
import furbabies from './furbabies';
import user from './user';
import scrapbook from './scrapbook';



export default combineReducers({

  furbabies,
  user,
  scrapbook
});

// export * from './walks';
export * from './furbabies';
export * from './user';

export * from './scrapbook';
