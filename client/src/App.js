import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import Main from './scenes/main';
import sagas from './sagas';
import './App.css';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
export const store = createStore(reducer, /* preloadedState, */ enhancer);

sagas.forEach(saga => sagaMiddleware.run(saga));

const App = () => (
  <Provider store={store}>
    <div id="main">
      <Main />
    </div>
  </Provider>
);

export default App;
