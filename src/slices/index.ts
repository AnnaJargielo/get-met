import { combineReducers } from 'redux';
import { ArtReducer } from './art';
import { ObjectsReducer } from './objects';

export default combineReducers({
  art: ArtReducer,
  objects: ObjectsReducer,
});
