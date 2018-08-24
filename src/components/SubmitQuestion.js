import React, { Component, Fragment } from 'react'
import { Header, Form, Segment, Label } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export class SubmitQuestion extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state

    return (
      <Fragment>
        <Header as="h2" content="Submit a Question" />
        <Segment>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Name' placeholder='My name is...' />
              <Form.Input fluid label='Location' placeholder='I am working...' />
            </Form.Group>
            {/* <Form.Group inline>
              <label>Location</label>
              <Form.Radio
                label='CR1'
                value='cr1'
                checked={value === 'cr1'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='CR2'
                value='cr2'
                checked={value === 'cr2'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='CR3'
                value='cr3'
                checked={value === 'cr3'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='OAC'
                value='oac'
                checked={value === 'oac'}
                onChange={this.handleChange}
              />
            </Form.Group> */}
            <Form.TextArea label='Question' placeholder='I am struggling with...' />
            <Form.Group>
              <Form.Checkbox label='Googled' />
              <Form.Checkbox label='Asked Student' />
              <Form.Checkbox label='Debugged' />
            </Form.Group>
            <Form.Button>Submit</Form.Button>
          </Form>
        </Segment>
      </Fragment>
    )
  }
}

export default SubmitQuestion
