import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greeter from './Greeter/Greeter.react';
import LoginForm from './LoginForm/LoginForm.react';
import Menu from './Menu/Menu.react'
import ShowDonors from './'
import DisplayDonors from './DisplayDonors/DisplayDonors.react';

function App() {
  return (
    <div className="App">
      {/* <Greeter></Greeter>
      <Menu></Menu>
      <LoginForm></LoginForm> */}
      <DisplayDonors></DisplayDonors>
    </div>
  );
}

export default App;
