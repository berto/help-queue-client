import React, { Component, Fragment } from 'react'
import { Header, Form, Segment, Checkbox } from 'semantic-ui-react'

class SubmitQuestion extends Component {
  state = {
    name: '',
    location: '',
    question: '',
    googled: false,
    askedStudent: false,
    hasDebugged: false
  }

  handleInputChange = (e, { name, value }) => this.setState({ [name]: value })
  handleCheckboxChange = (e, { name, checked }) => this.setState({ [name]: checked })

  render() {
    const { name, location, question, googled, askedStudent, hasDebugged } = this.state
    const { handleInputChange, handleCheckboxChange, handleSubmit } = this 

    return (
      <Fragment>
        <Header as="h2" content="Submit a Question" />
        <Segment>
          <Form onSubmit={handleSubmit} >
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                label='Name'
                placeholder='My name is...'
                name='name'
                value={name}
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                label='Location'
                placeholder='I am working...'
                name='location'
                value={location}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.TextArea
              label='Question'
              placeholder='I am struggling with...'
              name='question'
              value={question}
              onChange={handleInputChange}
            />
              <Checkbox 
                label='Googled'
                name='googled'
                checked={googled}
                onChange={handleCheckboxChange}
              />
              <Checkbox 
                label='Asked Student'
                name='askedStudent'
                checked={askedStudent}
                onChange={handleCheckboxChange}
              />
              <Checkbox 
                label='Debugged'
                name='hasDebugged'
                checked={hasDebugged}
                onChange={handleCheckboxChange}
              />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Segment>
      </Fragment>
    )
  }
}

export default SubmitQuestion