/*
 * Copyright(c) omk 2016
 * Filename: reducers.js
 * Author  : Lin Chen <lc@omk.io>
 * Create  : Wednesday, 16 November 2016.
 */

import { combineReducers } from 'redux';
import todos from './todoReducer';

const todoApp = combineReducers({
  todos
});

export default todoApp;
