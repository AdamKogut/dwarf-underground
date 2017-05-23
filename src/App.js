import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import MainClass from './MainClass.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <MainClass />

        <Footer />
      </div>
    );
  }
}

export default App;
