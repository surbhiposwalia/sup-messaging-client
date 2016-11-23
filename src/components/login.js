import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import './App.css';

const Login = React.createClass({
  render() {
    return (
      <div id="Login-page">
        <div id="Login-header">
          <h1 id="login-title">Log In</h1>
            <form id="login-form">
              <fieldset>
                <label for="username">Username:</label>
                <input id="username" name="textfield" ref="username" type="text" />
            
                <label for="password">Password:</label>
                <input id="password" name="textfield" ref="password" type="text" />
            
                <button for="login" id="log-in-button" type="submit">
                <Link for="link to chat" id="to-chat-page" to='/chat'>
                Log In
                </Link>
                </button>
              </fieldset>
            </form>
        </div>
      </div>
    );
  }
});

export default Login;