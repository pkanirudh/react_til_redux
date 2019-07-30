import React from 'react';
//import logo from './logo.svg';
import Header from './Header/Header.react'
// import Footer from './Footer/Footer.react'
import Content from './Content/Content.react'
import './App.css';

import Navigation from './Navigation/Navigation.react';
import ShowContent from './ShowContent/ShowContent.react';
//import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
