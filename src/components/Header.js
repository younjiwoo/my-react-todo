import React, {Component} from 'react'
// Link creates a link to another route (similar to href in an HTML <a> tag).
import {Link} from 'react-router'

class Header extends Component{
  render(){
    return (
      <header>
        <h1><Link to={'/todos'}>React Todos</Link></h1>
      </header>
    )
  }
}

export default Header