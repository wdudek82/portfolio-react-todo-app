// @flow
import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todoList: [
    {
      id: '1',
      text: 'todo item 1',
      edited: false,
      completed: false,
    },
    {
      id: '2',
      text: 'todo item 2',
      edited: false,
      completed: false,
    },
    {
      id: '3',
      text: 'todo item 3',
      edited: false,
      completed: false,
    },
    {
      id: '4',
      text: 'todo item 4',
      edited: false,
      completed: false,
    },
    {
      id: '5',
      text: 'todo item 5',
      edited: false,
      completed: false,
    },
  ],
};

function createTodoItem(state, text) {
  if (text) {
    const id = _.uniqueId(`${text}_`);
    return {
      todoList: [
        {
          id,
          text,
          edited: false,
          completed: false,
        },
        ...state.todoList,
      ],
    };
  }

  return state;
}

function updateTodoItem(state, itemId, newText) {
  const updatedTodoList = state.todoList.map((item) => {
    let updatedItem = item;
    if (item.id === itemId) {
      updatedItem = {
        ...item,
        text: newText,
        edited: false,
      };
    }
    return updatedItem;
  });

  return {
    ...state,
    todoList: updatedTodoList,
  };
}

function deleteTodoItem(state: Object, itemId: string) {
  const updatedTodoList = state.todoList.filter((item) => {
    return item.id !== itemId;
  });

  return {
    ...state,
    todoList: updatedTodoList,
  };
}

function removeAllItems(state: Object) {
  return {
    ...state,
    todoList: [],
  };
}

function toggleTodoCompleted(state, itemId) {
  const updatedTodoList = state.todoList.map((item) => {
    let updatedItem = item;
    if (item.id === itemId) {
      updatedItem = { ...item, completed: !item.completed };
    }
    return updatedItem;
  });

  return {
    ...state,
    todoList: updatedTodoList,
  };
}

function startEditing(state: Object, itemId: string) {
  const updatedTodoList = state.todoList.map((item) => {
    let updatedItem = item;
    if (item.id === itemId && !item.completed) {
      updatedItem = { ...item, edited: true };
    } else {
      // To prevent editing two items simultaneously
      updatedItem = { ...item, edited: false };
    }
    return updatedItem;
  });

  return {
    ...state,
    todoList: updatedTodoList,
  };
}

function cancelEditing(state: Object, itemId: string) {
  const updatedTodoList = state.todoList.map((item) => {
    let updatedItem = item;
    if (item.id === itemId) {
      updatedItem = { ...item, edited: false };
    }
    return updatedItem;
  });

  return {
    ...state,
    todoList: updatedTodoList,
  };
}

const todoReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case actionTypes.CREATE_TODO_ITEM:
      return createTodoItem(state, action.text);
    case actionTypes.UPDATE_TODO_ITEM:
      return updateTodoItem(state, action.itemId, action.newText);
    case actionTypes.DELETE_TODO_ITEM:
      return deleteTodoItem(state, action.itemId);
    case actionTypes.REMOVE_ALL_ITEMS:
      return removeAllItems(state);
    case actionTypes.TOGGLE_TODO_COMPLETED:
      return toggleTodoCompleted(state, action.itemId);
    case actionTypes.SET_TODO_START_EDITING:
      return startEditing(state, action.itemId);
    case actionTypes.SET_TODO_STOP_EDITING:
      return cancelEditing(state, action.itemId);
    default:
      return state;
  }
};

export default todoReducer;
