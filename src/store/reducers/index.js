import { combineReducers } from 'redux';

import photosReducer from './photosReducer';

const appReducer = combineReducers({
  photos: photosReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    // eslint-disable-next-line
    state = null;
  }

  return appReducer(state, action);
};

export default rootReducer;
