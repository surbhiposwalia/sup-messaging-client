import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import './App.css';

const Chatbox = React.createClass({
  render() {
    return (
      <div id="chat-page">
        <div id="chat-header">
          <h1 id="chat-title">Chat</h1>
            
        </div>
      </div>
    );
  }
});

export default Chatbox;