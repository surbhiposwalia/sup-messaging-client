import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div id="App-header">
          <h1 id="App-title">SUP</h1>
          <h2 id="App-byline">A messaging app for friends, strangers, whatever</h2>
          
          <Link for="link to register page" id="to-register-page" to='/register'>Register</Link>
          <Link for="link to log in page" id="to-login-page" to='/login'>Log In</Link>
        </div>
      </div>
    );
  }
}

export default App;