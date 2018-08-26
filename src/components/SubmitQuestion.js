import React, { Component, Fragment } from 'react'
import { Header, Form, Segment, Checkbox } from 'semantic-ui-react'

class SubmitQuestion extends Component {
  state = {
    name: '',
    location: '',
    question: '',
    googled: false,
    askedStudent: false,
    hasDebugged: false,
    contacted: false,
    completed: false
  }

  handleInputChange = (e, { name, value }) => this.setState({ [name]: value })
  handleCheckboxChange = (e, { name, checked }) => this.setState({ [name]: checked })

  handleSubmit = (e) => {
    e.preventDefault()
    this.validateForm()
      ? this.props.addQuestion(this.state)
      : console.log('please fill out form correctly')
  }

  validateForm = () => {
    return this.state.googled === true || this.state.askedStudent === true || this.state.hasDebugged === true
  }

  resetForm() {
    this.setState({
      name: '',
      location: '',
      question: '',
      googled: false,
      askedStudent: false,
      hasDebugged: false,
      contacted: false,
      completed: false
    })
  }

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
                required
                fluid
                label='Name'
                placeholder='My name is...'
                name='name'
                value={name}
                onChange={handleInputChange}
              />
              <Form.Input
                required
                fluid
                label='Location'
                placeholder='I am working...'
                name='location'
                value={location}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.TextArea
              required
              label='Question'
              placeholder='I am struggling with...'
              name='question'
              value={question}
              onChange={handleInputChange}
            />
            <Form.Field>
              <Checkbox
                label='Googled'
                name='googled'
                checked={googled}
                onChange={handleCheckboxChange}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox 
                label='Asked Student'
                name='askedStudent'
                checked={askedStudent}
                onChange={handleCheckboxChange}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox 
                label='Debugged'
                name='hasDebugged'
                checked={hasDebugged}
                onChange={handleCheckboxChange}
              />
            </Form.Field>
            <Form.Button>Submit</Form.Button>
          </Form>
        </Segment>
      </Fragment>
    )
  }
}

export default SubmitQuestion