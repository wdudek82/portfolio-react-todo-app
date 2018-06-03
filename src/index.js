import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import globalStyles from './Main.styles';
import Root from './Root';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

injectGlobal`${globalStyles}`;

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
