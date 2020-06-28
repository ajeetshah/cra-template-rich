import React, { StrictMode } from 'react'
import './styles/index.scss'
import ReactDOM from 'react-dom'
import App from './app/app'
import store from './store/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import ErrorBoundary from './common/errorboundary/errorBoundary'

// import serialize from 'serialize-javascript'
// console.log(serialize(window['SERVER_DATA'])) // Using server data after serializing

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
