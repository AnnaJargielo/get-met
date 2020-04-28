import { combineReducers } from 'redux';
import { ArtReducer } from './art';

export default combineReducers({
  art: ArtReducer,
});
