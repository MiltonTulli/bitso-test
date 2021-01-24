import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { initialState } from './modules';

export default () => {
  const middlewareChain = [thunk];
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewareChain.push(logger);
  }
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewareChain))
  );
  return store;
};
