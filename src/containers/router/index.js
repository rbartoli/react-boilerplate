import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from '../../routes'

class RouterContainer extends React.Component {
    render() {
        return (
            <Router
                history={browserHistory}
                routes={routes}
            />
        )
    }
}

export default RouterContainer
