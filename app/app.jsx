import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div className="container">
    <h1>Hello, react!</h1>
  </div>
);

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
