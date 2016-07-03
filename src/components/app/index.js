import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import style from './style.css'

class App extends Component {
  render() {
    return (
        <div className={style.root}>
            <h1>{'React App'}</h1>
            <ul>
                <li><Link to="/">{'Home'}</Link></li>
            </ul>

            {this.props.children}
        </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
