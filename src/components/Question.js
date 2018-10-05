import React, { Component } from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import Moment from 'moment'

// Components
import ConfirmationModal from "./ConfirmationModal";

class Question extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
  handleComplete = (id) => {
    this.props.removeQuestion(id)
    this.handleClose()
  }
   
  render() {
    const { modalOpen } = this.state
    const { handleComplete, handleClose } = this
    const { question, toggleContacted } = this.props
    const { id, name, location, googled, askedStudent, hasDebugged, contacted, createdAt } = question

    return (
      <Card>
        <Card.Content>
          <Card.Header>{name} - {location}</Card.Header></Card.Content>
        <Card.Content>
          <Card.Description>{question.question}<span className="timestamp">{Moment(createdAt).fromNow()}</span></Card.Description>
        </Card.Content>
        <Card.Content extra>
          {googled ? <Icon circular color='teal' name='google' /> : <Icon circular name='google' />}
          {askedStudent ? <Icon circular color='teal' name='talk' /> : <Icon circular name='talk' />}
          {hasDebugged ? <Icon circular color='teal' name='bug' /> : <Icon circular name='bug' />}
          <Button.Group floated="right">
            <Button compact icon labelPosition='left' positive={contacted} onClick={() => {toggleContacted(id, contacted)}}>
              <Icon name='right arrow' />
              Contacted
            </Button>
            <Button compact icon color="teal" labelPosition='right' onClick={this.handleOpen}>
              Completed
              <Icon name='check' />
            </Button>
          </Button.Group>
        </Card.Content>
        <ConfirmationModal
          modalOpen={modalOpen}
          handleClose={handleClose}
          handleComplete={handleComplete}
          id={id}
        />
      </Card>
    )
  }
}

export default Question