import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store/store'
import App from './app'

test('renders the heading', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const element = screen.getByText(/cra/i)
  expect(element).toBeInTheDocument()
})
