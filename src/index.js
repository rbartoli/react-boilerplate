import React from 'react'
import ReactDOM from 'react-dom'
// import App from './components/app'
// import routes from './routes'

const rootEl = document.getElementById('app')

let render = () => {
    const RouterContainer = require('./containers/router/index').default
    ReactDOM.render(
        <RouterContainer />,
        rootEl
    )
}

if (module.hot) {
    // Support hot reloading of components
    // and display an overlay for runtime errors
    const renderApp = render
    const renderError = (e) => {
        const RedBox = require('redbox-react')
        ReactDOM.render(
            <RedBox error={e} />,
            rootEl
        )
    }
    render = () => {
        try {
            renderApp()
        } catch (e) {
            renderError(e)
        }
    }

    module.hot.accept('./containers/router/index', () => {
        render()
    })
}

render()
