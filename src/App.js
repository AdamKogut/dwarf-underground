import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Posts from './Posts.js'
import Ads from './Ads.js'
import Sidebar from './Sidebar.js'
import Links from './Links.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <div className="avatar">
              <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
              <div className="author-info">
                <p className="author-name">By Domri, son of Flug</p>
                <p className="date">on 28 April, 3018 of the Third Age</p>
              </div>
            </div>
            <Posts />
            <Links />
          </div>
        <Sidebar />

        <Ads />
        </main>

        <footer className="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 className="float-right">All rights reserved</h6>
        </footer>
      </div>
    );
  }
}

export default App;
