import { createGlobalStyle } from 'styled-components'

import RussoOne from '../fonts/russo-one.woff2'
import MPlus from '../fonts/m-plus.woff2' 
import Andika from '../fonts/andika.woff2' 

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    background: ${(props) => props.theme.background};
  }

  @font-face {
  font-family: 'Russo One';
  src: url(${RussoOne}) format('woff2');
  font-style: normal;
  }

  @font-face {
  font-family: 'M Plus';
  src: url(${MPlus}) format('woff2');
  font-style: normal;
  }

  @font-face {
  font-family: 'Andika';
  src: url(${Andika}) format('woff2');
  font-style: normal;
  }

`
