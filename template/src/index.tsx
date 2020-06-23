import React, { StrictMode } from 'react'
import './styles/index.scss'
import ReactDOM from 'react-dom'
import App from './app/app'
import store from './store/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { IntlProvider } from 'react-intl'
import messages from './translations/messages'
import ErrorBoundary from './common/errorboundary/errorBoundary'
// import serialize from 'serialize-javascript'

const language = navigator.language.split(/[-_]/)[0]

// console.log(serialize(window['SERVER_DATA'])) // Using server data after serializing

ReactDOM.render(
  <IntlProvider defaultLocale="en" locale={language} messages={messages[language]}>
    <Provider store={store}>
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>
    </Provider>
  </IntlProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
