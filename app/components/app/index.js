import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>React App</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                
                {this.props.children}
            </div>
        )
    }
});

export default App;
