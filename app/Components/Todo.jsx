import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  text, completed, onClick, setDeadline
}) => (
  <li
    style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? 'green' : 'red' }}
  >
    <input type="checkbox" onClick={onClick} checked={completed} />
    {completed ? `DONE: ${text}` : `TODO: ${text}` }
    <br />
    截止日期:<input type="date" onBlur={setDeadline} min="Monday" />
  </li>
);

Todo.propTypes = {
  setDeadline: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
export default Todo;
