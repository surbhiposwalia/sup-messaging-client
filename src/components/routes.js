import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './App.js';
import Chatbox from './Chatbox.js';
import Login from './Login.js';
import Register from './Register.js';

var routes = (
    <Router history={hashHistory}>
        <Route path= "/" component={App} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={Chatbox} />
    </Router>
);

export default routes;