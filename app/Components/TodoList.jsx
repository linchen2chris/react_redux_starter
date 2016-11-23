import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onClickTodo }) => (

  <ul>
    {
      todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onClickTodo(todo.id)} />
      ))
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onClickTodo: PropTypes.func.isRequired
};

export default TodoList;
