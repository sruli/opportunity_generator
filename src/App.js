import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import Main from './scenes/main';
import sagas from './sagas';
import './App.css';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagas.forEach(saga => sagaMiddleware.run(saga));

const App = () => (
  <Provider store={store}>
    <div id="main">
      <Main />
    </div>
  </Provider>
);

export default App;
