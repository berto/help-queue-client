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

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleCheckboxChange = (e) => {
    e.target.type === 'checkbox'
      ? this.setState({ [e.target.name]: e.target.checked })
      : this.setState({ [e.target.previousSibling.name]: !e.target.previousSibling.checked })
  }

  render() {
    const { name, location, question, googled, askedStudent, hasDebugged } = this.state
    const { handleInputChange, handleCheckboxChange } = this 

    return (
      <Fragment>
        <Header as="h2" content="Submit a Question" />
        <Segment>
          <Form>
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
            <Form.Group>
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
            </Form.Group>
            <Form.Button>Submit</Form.Button>
          </Form>
        </Segment>
      </Fragment>
    )
  }
}

export default SubmitQuestion