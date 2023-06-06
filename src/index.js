import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import './index.css';
import styled, {css, createGlobalStyle} from 'styled-components';
import GlobalStyle from './components/utils/globalStyle';
import { FontFerry } from './components/utils/fonts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

