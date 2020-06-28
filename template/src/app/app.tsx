import React, { Suspense, useState } from 'react'
import Routes from '../routes/routes'
import ReLoader from '../common/reLoader'
import { selectLoading } from './appSlice'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { IntlProvider } from 'react-intl'
import messages from '../translations/messages'
import { Form } from 'react-bootstrap'

const languages = ['ar', 'en', 'es', 'fr', 'ru', 'zh']

export default function App() {
  const loading = useSelector(selectLoading)
  const [language, setLanguage] = useState('en')
  const toastDuration = Number(process.env.REACT_APP_TOAST_DURATION || 5000)

  return (
    <IntlProvider defaultLocale="en" locale={language} messages={messages[language]}>
      <Suspense fallback={<ReLoader loading={true} />}>
        <ToastContainer
          autoClose={toastDuration}
          toastClassName="f-14"
          newestOnTop={true}
        />
        <ReLoader loading={loading} />
        <Form className="w-60 float-right">
          <Form.Group controlId="language">
            <Form.Control
              as="select"
              defaultValue={language}
              onChange={(e) => setLanguage(e.currentTarget.value)}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
        <Routes />
      </Suspense>
    </IntlProvider>
  )
}
