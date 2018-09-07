import React, { Component } from 'react'
import { Label, Menu, Icon, Header } from 'semantic-ui-react'

class Sidebar extends Component {
  render() {
    const { activeItem, totalQuestions, handleMenuChange } = this.props        

    return (
      <React.Fragment>
        <Header as="h2" content="Navigation" />
        <Menu vertical fluid>
          <Menu.Item name='Questions' active={activeItem === 'Questions'} onClick={handleMenuChange}>
            <Label color='teal'>{totalQuestions}</Label>
            Questions
          </Menu.Item>

          <Menu.Item name='Submit' active={activeItem === 'Submit'} onClick={handleMenuChange}>
            <Icon name='send' />
            Submit a Question
          </Menu.Item>
        </Menu>
      </React.Fragment>
    )
  }
}

export default Sidebar