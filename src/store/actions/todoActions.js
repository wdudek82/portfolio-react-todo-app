// @flow
import * as actionTypes from './actionTypes';

export const createTodoItem = (text: string) => ({
  type: actionTypes.CREATE_TODO_ITEM,
  text,
});

export const getTodoItems = () => ({
  type: actionTypes.GET_TODO_ITEMS,
});

export const updateTodoItem = (itemId: string, newText: string) => ({
  type: actionTypes.UPDATE_TODO_ITEM,
  itemId,
  newText,
});

export const deleteTodoItem = (itemId: string) => ({
  type: actionTypes.DELETE_TODO_ITEM,
  itemId,
});

export const removeAllTodoItems = () => ({
  type: actionTypes.REMOVE_ALL_ITEMS,
});

export const toggleTodoCompleted = (itemId:string) => ({
  type: actionTypes.TOGGLE_TODO_COMPLETED,
  itemId,
});

export const startEditing = (itemId: string) => ({
  type: actionTypes.SET_TODO_START_EDITING,
  itemId,
});

export const cancelEditing = (itemId: string) => ({
  type: actionTypes.SET_TODO_STOP_EDITING,
  itemId,
});
