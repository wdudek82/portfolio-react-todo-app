import * as actionCreators from '../todoActions';
import * as actionTypes from '../actionTypes';

describe('createTodoItem tests', () => {
  let action;

  beforeEach(() => {
    const text = 'new todo item';
    action = actionCreators.createTodoItem(text);
  });

  it('should return CREATE_TODO_ITEM action type', () => {
    expect(action.type).toBe(actionTypes.CREATE_TODO_ITEM);
  });

  it('should return correct text', () => {
    expect(action.text).toBe('new todo item');
  });
});
