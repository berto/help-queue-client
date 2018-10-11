import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const Header = (props) => {
  let bellIcon
  if (!props.stopNotification) {
    bellIcon = ( 
      props.notificationStatus === 'granted'
        ? <Icon onClick={() => props.toggleNotification(true)} disabled name='bell' />
        : <Icon onClick={() => props.toggleNotification(false)} disabled name='bell slash' />
    )
  }
  return (
    <Menu inverted>
      <Menu.Item header>
        <h1>gSchool Help Queue</h1>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          {bellIcon}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Header