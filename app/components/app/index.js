import { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <h1>React App</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                
                {this.props.children}
            </div>
        );
    }
}

export default App;
