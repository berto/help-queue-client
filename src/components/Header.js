import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Header extends Component {
  render() {
    return (
      <Menu inverted>
        <Menu.Item header>
          <h1>gSchool Help Queue</h1>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header