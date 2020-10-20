import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store/store'
import App from './app'

test('renders the heading', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const element = getByText(/cra/i)
  expect(element).toBeInTheDocument()
})
