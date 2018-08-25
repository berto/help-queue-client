import React, { Component, Fragment } from 'react'
import { Header, Form, Segment, Checkbox } from 'semantic-ui-react'

class SubmitQuestion extends Component {
  state = {
    // name: '',
    // location: '',
    // question: '',
    // googled: false,
    // askedStudent: false,
    // hasDebugged: false
  }

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleCheckboxChange = (e) => {
    console.dir(e.target)
    console.log('Value:', e.target.previousSibling.value)
    console.log('Checked:', e.target.previousSibling.checked)
    console.log('Name:', e.target.previousSibling.name)
    this.setState({ [e.target.previousSibling.name]: !e.target.previousSibling.checked })

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



// import React, { Component } from 'react'
// import { Form, Checkbox } from 'semantic-ui-react'

// export default class CheckboxExampleRadioGroup extends Component {
//   state = {}
//   handleChange = (e, { value }) => this.setState({ value })

//   render() {
//     return (
//       <Form>
//         <Form.Field>
//           Selected value: <b>{this.state.value}</b>
//         </Form.Field>
//         <Form.Field>
//           <Checkbox
//             radio
//             label='Choose this'
//             name='checkboxRadioGroup'
//             value='this'
//             checked={this.state.value === 'this'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//         <Form.Field>
//           <Checkbox
//             radio
//             label='Or that'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//       </Form>
//     )
//   }
// }