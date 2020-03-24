// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import logMiddleware from 'src/middleware/logMiddleware';
import ajaxQuestionMiddleware from 'src/middleware/ajaxQuestionMiddleware';
import ajaxUserMiddleware from 'src/middleware/ajaxUserMiddleware';
import ajaxMiddlewareTags from 'src/middleware/ajaxMiddlewareTags';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    ajaxQuestionMiddleware,
    ajaxUserMiddleware,
    ajaxMiddlewareTags,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
