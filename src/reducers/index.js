import { combineReducers } from 'redux';
import counter from './counter';
import login from './login';
import questions from './questions';
import signIn from './signIn';

export default combineReducers({
  counter,
  login,
  questions,
  signIn,
});
