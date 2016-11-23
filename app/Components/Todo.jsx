import React, { PropTypes } from 'react';

const Todo = ({ text, completed, onClick }) => (
  <li
    style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? 'green' : 'red' }}
  >
    <input type="checkbox" onClick={onClick} checked={completed} />
    {completed ? `DONE: ${text}` : `TODO: ${text}` }
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
export default Todo;
