/*
 * Copyright(c) omk 2016
 * Filename: actions.js
 * Author  : Lin Chen <lc@omk.io>
 * Create  : Wednesday, 16 November 2016.
 */

let id = 0;
export const addTodo = text => ({
  type: 'ADD',
  id: id++,
  text
});

export const toggleTodo = id => ({
  type: 'TOGGLE',
  id
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});
