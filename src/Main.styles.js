import { css } from 'styled-components';
import bieszczady from './assets/images/bieszczady.png';

const globalStyles = css`
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
    background-image: url(${bieszczady});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: auto cover;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export default globalStyles;
