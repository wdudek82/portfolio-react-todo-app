import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './store/reducers/todoReducer';

import App from './App';

import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

  * {
    box-sizing: border-box;
    color: #333;
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const store = createStore(todoReducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
