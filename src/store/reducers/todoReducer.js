import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todoList: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TODO_ITEM:
      return {
        todoList: [
          {text: action.text, edited: false, completed: false},
          ...state.todoList
        ]
      };
    default:
      return state;
  }
};

export default todoReducer;