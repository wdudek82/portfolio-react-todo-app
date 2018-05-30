import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todoList: [
    { text: 'todo item 1', edited: false, completed: false },
    { text: 'todo item 2', edited: false, completed: false },
    { text: 'todo item 3', edited: false, completed: false },
    { text: 'todo item 4', edited: false, completed: false },
    { text: 'todo item 5', edited: false, completed: false },
  ],
};

function createTodoItem(state, text) {
  if (text) {
    return {
      todoList: [
        { text, edited: false, completed: false },
        ...state.todoList,
      ],
    };
  }

  return state;
}

function updateTodoItem(state, itemId, newText) {
  const updatedTodoList = state.todoList.map((item, ind) => {
    let updatedItem = item;
    if (ind === itemId) {
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

function deleteTodoItem(state, itemId) {
  const updatedTodoList = state.todoList.filter((item, ind) => {
    return ind !== itemId;
  });

  return {
    ...state,
    todoList: updatedTodoList,
  };
}

function removeAllItems(state) {
  return {
    ...state,
    todoList: [],
  };
}

function toggleTodoCompleted(state, itemId) {
  const updatedTodoList = state.todoList.map((item, ind) => {
    const updatedItem = item;
    if (ind === itemId) {
      updatedItem.completed = !item.completed;
    }
    return updatedItem;
  });

  return {
    ...state,
    todoList: updatedTodoList,
  };
}

function setTodoStartEditing(state, itemId) {
  if (state.todoList[itemId].completed) {
    return state;
  }

  const updatedTodoList = state.todoList.map((item, ind) => {
    const updatedItem = item;
    if (ind === itemId) {
      updatedItem.edited = !updatedItem.edited;
    } else {
      updatedItem.edited = false;
    }
    return updatedItem;
  });

  return {
    ...state,
    todoList: updatedTodoList,
  };
}

function setTodoStopEditing(state, itemId) {
  const updatedTodoList = state.todoList.map((item, ind) => {
    const updatedItem = item;
    if (ind === itemId) {
      updatedItem.edited = false;
    }
    return updatedItem;
  });

  return {
    ...state,
    todoList: updatedTodoList,
  };
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TODO_ITEM:
      return createTodoItem(state, action.text);
    case actionTypes.UPDATE_TODO_ITEM:
      return updateTodoItem(state, action.itemId, action.newText);
    case actionTypes.DELETE_TODO_ITEM:
      return deleteTodoItem(state, action.itemId);
    case actionTypes.REMOVE_ALL_ITEMS:
      return removeAllItems();
    case actionTypes.TOGGLE_TODO_COMPLETED:
      return toggleTodoCompleted(state, action.itemId);
    case actionTypes.SET_TODO_START_EDITING:
      return setTodoStartEditing(state, action.itemId);
    case actionTypes.SET_TODO_STOP_EDITING:
      return setTodoStopEditing(state, action.itemId);
    default:
      return state;
  }
};

export default todoReducer;
