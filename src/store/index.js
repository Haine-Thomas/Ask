// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';
import throttle from 'lodash.throttle';

// == Import : local
import rootReducer from 'src/reducers';
import logMiddleware from 'src/middleware/logMiddleware';
import ajaxQuestionMiddleware from 'src/middleware/ajaxQuestionMiddleware';
import ajaxUserMiddleware from 'src/middleware/ajaxUserMiddleware';
import ajaxMiddlewareTags from 'src/middleware/ajaxMiddlewareTags';
import ajaxAnswerMiddleware from 'src/middleware/ajaxAnswerMiddleware';
// == Enhancers
// on fait en sorte d'avoir accès au devtool s'il est installé
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// fonction qui
const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    ajaxQuestionMiddleware,
    ajaxUserMiddleware,
    ajaxMiddlewareTags,
    ajaxAnswerMiddleware,
  ),
);

/*
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  }
  catch (e) {
    return undefined;
  }
};
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  }
  catch (e) {
    // Ignore write errors;
  }
};
const persistedState = loadState();
*/
// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  // persistedState,
  enhancers,
);

/*
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));
*/
// == Export
export default store;
