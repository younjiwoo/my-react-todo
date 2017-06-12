import React from 'react'
// Using {Route} imports one specific module - the Route module - from react-router - and names it Route. Without the {}, the import it would have grabbed all of react-router functionality.
import {Route} from 'react-router'
import App from '../App'
import TodosContainer from '../containers/TodosContainer'

export default (
  <Route path='/' component={App}>
    <Route path='/todos' component={TodosContainer} />
  </Route>
)
