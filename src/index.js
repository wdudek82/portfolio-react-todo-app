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

  html {
    min-height: 100vh;
  }

  body {
    background-image: url(
      'https://www.publicdomainpictures.net/pictures/160000/velka/carribean-sea-and-sky-14574356900Js.jpg'
    );
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto cover;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const app = (
  <React.StrictMode>
    <Root>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Root>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
