import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import reducer from './reducers';

const log = store => next => (action) => {
  console.log(19, store.getState());
  const result = next(action);
  return result;
};

const store = createStore(reducer, {}, applyMiddleware(log));

const app = document.createElement('div');
document.body.appendChild(app);
/* ReactDOM.render(<App />, app);*/

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
