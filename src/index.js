import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import './index.css';
import styled, {css, createGlobalStyle} from 'styled-components';
import GlobalStyle from './components/utils/globalStyle';
import FontStyles from './components/utils/Fonts/FontStyles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FontStyles/>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

