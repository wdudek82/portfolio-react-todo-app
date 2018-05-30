import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import Root from './Root';
import App from './components/App';

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


const app = (
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
