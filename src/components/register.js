import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import * as actions from '../actions/action-index';
import './App.css';
import { connect } from 'react-redux';


class Register extends Component {
  checkPassword(){
    if(this.refs.password.value === this.refs.confirmpassword.value) {
      this.props.dispatch(actions.createNewUser(this.refs.username.value, this.refs.password.value));
    }
  }
  
  render() {
    return (
      <div id="register-page">
        <div id="register-header">
          <h1 id="register-title">Register</h1>
            <form id="register-form">
              <fieldset>
                <label>Username:</label>
                <input id="username" name="textfield" ref="username" required type="text" />
            
                <label>Password:</label>
                <input id="password" name="textfield" ref="password" required type="text" />
            
                <label>Confirm Password:</label>
                <input id="confirm-password" name="textfield" ref="confirmpassword" required type="text" />
            
                <button id="register-button" type="submit">
                <Link id="to-chat-page" to='/chat'>
                Register
                </Link>
                </button>
              </fieldset>
            </form>
        </div>
      </div>
    );
  }
}

export default connect()(Register);