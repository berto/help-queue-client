import React, { Component } from 'react'
import {Label, Menu, Icon } from 'semantic-ui-react'

class Sidebar extends Component {
  render() {
    const { activeItem, totalQuestions, handleMenuChange } = this.props

    return (
      <Menu vertical>
        <Menu.Item name='Questions' active={activeItem === 'Questions'} onClick={handleMenuChange}>
          <Label color='teal'>{totalQuestions}</Label>
          Questions
        </Menu.Item>

        <Menu.Item name='Submit' active={activeItem === 'Submit'} onClick={handleMenuChange}>
          <Icon name='send' />
          Submit
        </Menu.Item>
      </Menu>
    )
  }
}

export default Sidebar