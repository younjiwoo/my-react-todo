// This file sets up a route, but it's not connected to any of the app's other files yet. 

import React from 'react'
// Using {Route} imports one specific module - the Route module - from react-router - and names it Route.
import {Route} from 'react-router'
import App from '../App'
import TodosContainer from '../containers/TodosContainer'

export default (
  <Route path='/' component={App}>
    <Route path='/todos' component={TodosContainer} />
  </Route>
)
