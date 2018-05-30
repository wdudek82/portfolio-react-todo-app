import * as actionCreators from '../todoActions';
import * as actionTypes from '../actionTypes';

describe('createTodoItem', () => {
  let result;

  beforeEach(() => {
    const text = 'new todo item';
    result = actionCreators.createTodoItem(text);
  });

  it('should return CREATE_TODO_ITEM action type', () => {
    expect(result.type).toBe(actionTypes.CREATE_TODO_ITEM);
  });

  it('should return correct text', () => {
    expect(result.text).toBe('new todo item');
  });
});
