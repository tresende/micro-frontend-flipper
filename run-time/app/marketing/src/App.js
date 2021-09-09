import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import Pricing from './components/Pricing'
import Landing from './components/Landing'

const App = () => {
  return (
    <>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </>
  )
}

export default App