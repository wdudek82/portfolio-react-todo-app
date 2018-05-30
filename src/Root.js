import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';

const root = (props) => {
  const store = createStore(
    rootReducer,
    props.initialState,
    applyMiddleware(),
  );

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};

root.defaultProps = {
  initialState: {},
};

root.propTypes = {
  children: PropTypes.object.isRequired,
  initialState: PropTypes.object,
};

export default root;
