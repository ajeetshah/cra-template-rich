import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { pathComponents, paths } from './routesConfig'
import history from './history'

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to={paths.home}></Redirect>
        {pathComponents.map((item) => (
          <Route exact key={item.path} path={item.path}>
            <item.component />
          </Route>
        ))}
      </Switch>
    </Router>
  )
}
