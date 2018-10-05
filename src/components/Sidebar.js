import React, { Component } from 'react'
import { Label, Menu, Icon, Header } from 'semantic-ui-react'
import { Link } from '@reach/router'

class Sidebar extends Component {
  render() {
    const { activeItem, totalQuestions, handleMenuChange } = this.props        

    return (
      <React.Fragment>
        <Header as="h2" content="Navigation" />
        <Menu vertical fluid>
          <Link to='/'><Menu.Item name='Questions' active={activeItem === 'Questions'} onClick={handleMenuChange}>
            <Label color='teal'>{totalQuestions}</Label>
            Questions
          </Menu.Item></Link>

          <Link to='/submit'><Menu.Item name='Submit' active={activeItem === 'Submit'} onClick={handleMenuChange}>
            <Icon name='send' />
            Submit a Question
          </Menu.Item></Link>
        </Menu>
      </React.Fragment>
    )
  }
}

export default Sidebar