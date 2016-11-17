/*
 * Copyright(c) omk 2016
 * Filename: typeReducer.js
 * Author  : Lin Chen <lc@omk.io>
 * Create  : Thursday, 17 November 2016.
 */

const typeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TYPING':
      return action.currentText;
    default:
      return state;
  }
};

export default typeReducer;
