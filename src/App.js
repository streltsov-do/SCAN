import React from 'react';
import { BrowserRouter } from "react-router-dom"
import styled, {css, createGlobalStyle} from 'styled-components';

import Header from './components/1_header/Header';
import Main from './components/2_main/Main';
import Footer from './components/3_footer/Footer';

// import './App.css';

import ava from "./components/utils/ava.png";

function App() {
  const logged = true;
  const loading = false;
  const name = "Алексей А.";
  const avatar = ava;

  return (
    <div className="App">
      
      <Header logged={logged} loading={loading} name={name} avatar={avatar}></Header>

      <Main></Main>

      <Footer></Footer>
    
    </div>
  );
}

export default App;
