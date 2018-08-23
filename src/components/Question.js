import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

const Question = ({ question, removeQuestion }) => {
  const { id, name, location, googled, askedStudent, hasDebugged } = question
  
  return (
    <Card>
      <Card.Content><Card.Header>{name} - {location}</Card.Header></Card.Content>
      <Card.Content description={question.question} />
      <Card.Content extra>
        {googled ? <Icon circular color='teal' name='google' /> : <Icon circular name='google' />}
        {askedStudent ? <Icon circular color='teal' name='talk' /> : <Icon circular name='talk' />}
        {hasDebugged ? <Icon circular color='teal' name='bug' /> : <Icon circular name='bug' />}
        <Button.Group floated="right">
          <Button compact icon labelPosition='left'>
            <Icon name='right arrow' />
            Contacted
          </Button>
          <Button compact icon color="teal" labelPosition='right' onClick={() => {removeQuestion(id)}}>
            Completed
            <Icon name='check' />
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  )
}
export default Question