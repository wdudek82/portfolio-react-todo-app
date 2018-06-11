import { createStore } from 'redux';
import todoReducer from './reducers/todoReducer';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default () => {
  const store = createStore(
    todoReducer,
    reduxDevtools
  );

  return store;
};
