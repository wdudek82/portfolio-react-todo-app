import * as actionTypes from './actionTypes';

export const createTodoItem = (text) => ({
  type: actionTypes.CREATE_TODO_ITEM,
  text,
});

export const getTodoItems = () => ({
  type: actionTypes.GET_TODO_ITEMS,
});

export const updateTodoItem = (itemId, newText) => ({
  type: actionTypes.UPDATE_TODO_ITEM,
  itemId,
  newText,
});

export const deleteTodoItem = (itemId) => ({
  type: actionTypes.DELETE_TODO_ITEM,
  itemId,
});

export const removeAllTodoItems = () => ({
  type: actionTypes.REMOVE_ALL_ITEMS,
});

export const toggleTodoCompleted = (itemId) => ({
  type: actionTypes.TOGGLE_TODO_COMPLETED,
  itemId,
});

export const setTodoStartEditing = (itemId) => ({
  type: actionTypes.SET_TODO_START_EDITING,
  itemId,
});

export const setTodoStopEditing = (itemId) => ({
  type: actionTypes.SET_TODO_STOP_EDITING,
  itemId,
});
