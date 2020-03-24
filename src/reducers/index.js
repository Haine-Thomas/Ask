import { combineReducers } from 'redux';
import counter from './counter';
import login from './login';
import questions from './questions';
import signIn from './signIn';
import tags from './tags';

export default combineReducers({
  counter,
  login,
  questions,
  signIn,
  tags,
});
