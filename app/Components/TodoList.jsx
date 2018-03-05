import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onClickTodo, setDeadline }) => (

  <ul>
    {
      todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onClickTodo(todo.id)}
          setDeadline={() => setDeadline(todo.id)}
        />
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
  onClickTodo: PropTypes.func.isRequired,
  setDeadline: PropTypes.func.isRequired
};

export default TodoList;
