import { combineReducers } from 'redux';
import counter from './counter';
import login from './login';
import questions from './questions';

export default combineReducers({
  counter,
  login,
  questions,
});
