/*
 * Copyright(c) omk 2016
 * Filename: actions.js
 * Author  : Lin Chen <lc@omk.io>
 * Create  : Wednesday, 16 November 2016.
 */

let nextId = 0;
export const addTodo = text => ({
  type: 'ADD',
  id: nextId++,
  text,
});

export const toggleTodo = todoId => ({
  type: 'TOGGLE',
  id: todoId
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const setDeadline = todoId => ({
  type: 'DEADLINE',
  id: todoId
});
