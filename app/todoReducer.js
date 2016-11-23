/*
 * Copyright(c) omk 2016
 * Filename: todoReducer.js
 * Author  : Lin Chen <lc@omk.io>
 * Create  : Wednesday, 16 November 2016.
 */

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    case 'DEADLINE':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        deadline: state.deadline
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE':
      return state.map(t => todo(t, action));
    case 'DEADLINE':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};
export default todos;
