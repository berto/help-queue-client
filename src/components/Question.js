import React, { Component } from 'react'
import { Card, Icon, Button, Modal, Header } from 'semantic-ui-react'

class Question extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
  handleComplete = (id) => {
    this.props.removeQuestion(id)
    this.handleClose()
  }
   
  render() {
    const { question, removeQuestion, toggleContacted } = this.props
    const { id, name, location, googled, askedStudent, hasDebugged, contacted } = question

    return (
      <Card>
        <Card.Content><Card.Header>{name} - {location}</Card.Header></Card.Content>
        <Card.Content description={question.question} />
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
        
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          size='small'
        >
          <Header icon='warning sign' content='Confirm Completion' />
          <Modal.Content>
            <h3>Are you sure this question has been completed?</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={this.handleClose} inverted>
              <Icon name='undo' />
              Abort
            </Button>
            <Button color='green' onClick={() => this.handleComplete(id)} inverted>
              <Icon name='checkmark' />
              Yup
            </Button>
          </Modal.Actions>
        </Modal>
      </Card>
    )
  }
}

export default Question