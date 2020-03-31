import { combineReducers } from 'redux';
import login from './login';
import questions from './questions';
import signIn from './signIn';
import tags from './tags';
import answer from './answer';

export default combineReducers({
  login,
  questions,
  signIn,
  tags,
  answer,
});
