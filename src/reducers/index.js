import { combineReducers } from 'redux';
import todo from '../reducers/todo'

const rootReducder = combineReducers([
  todo
]);

export default rootReducder
