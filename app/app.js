import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import App from './views/app';

ReactDOM.render((
    <Router>
        <Route path="/" component={App} />
    </Router>
), document.getElementById('app'));
