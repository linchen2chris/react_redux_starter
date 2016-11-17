import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {typeAction, addAction} from './actions';

const App = (props) => (
  <div className="container">
    <h1>TODO list!--Digital Health </h1>
    <input placeholder="please input" onChange={props.typeTodo} />
    <button onClick={props.addTodo.bind(this, props.currentText)}>Add</button>
    <ol>
      {
        props.todos.map(todo => (<li>{todo.text}</li>))
      }
    </ol>
    <a href='#'>All</a>
    <br />
    <a href='#'>DONE</a>
    <br />
    <a href='#'>TODO</a>
  </div>
);
const AppContainer = connect(state => {console.log(24,state); return state}, dispatch => ({
  typeTodo: event => dispatch(typeAction(event.target.value)),
  addTodo: text => dispatch(addAction(text))
  })) (App);
export default AppContainer;
