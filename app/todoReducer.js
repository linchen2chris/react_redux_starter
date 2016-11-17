/*
 * Copyright(c) omk 2016
 * Filename: todoReducer.js
 * Author  : Lin Chen <lc@omk.io>
 * Create  : Wednesday, 16 November 2016.
 */

const todo = (state = [], action) => {
  console.log(9, state, action);
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

export default todo;
