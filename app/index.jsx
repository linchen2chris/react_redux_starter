import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import reducer from './reducers';

const store = createStore(reducer);

const app = document.createElement('div');
document.body.appendChild(app);
/* ReactDOM.render(<App />, app);*/

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
