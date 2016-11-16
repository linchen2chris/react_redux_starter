import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import reducer from './reducers';

const initState = {
  todos: [
    {
      text: 'do a demo',
      complete: false
    },
    {
      text: 'add redux',
      complete: true
    }
  ]
};
const store = createStore(reducer, initState);

const app = document.createElement('div');
document.body.appendChild(app);
/* ReactDOM.render(<App />, app);*/

console.log(26, store, store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
