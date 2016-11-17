/*
 * Copyright(c) omk 2016
 * Filename: visibilityFilter.js
 * Author  : Lin Chen <lc@omk.io>
 * Create  : Friday, 18 November 2016.
 */

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  console.log(99, state, action);
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
