/*
 * Copyright(c) omk 2016
 * Filename: actions.js
 * Author  : Lin Chen <lc@omk.io>
 * Create  : Wednesday, 16 November 2016.
 */

export const typeAction = typeValue => ({
  type: 'TYPING',
  currentText: typeValue
});

export const addAction = text => ({
  type: 'ADD',
  id: 2,
  text
});
