import './App.css';
import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import rootMiddleware from './middlewares/rootMiddleware';
import RouteContent from './routers/RouteContent';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function App() {
  return (
    <Provider store={store}>
      <RouteContent />
    </Provider>
  );
}

sagaMiddleware.run(rootMiddleware);

export default App;
