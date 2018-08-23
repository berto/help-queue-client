import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

const CardExampleExtraContent = ({ question }) => {
  const { name, location, googled, askedStudent, hasDebugged  } = question
  
  return (
    <Card>
      <Card.Content><Card.Header>{name} - {location}</Card.Header></Card.Content>
      <Card.Content description={question.question} />
      <Card.Content extra>
        {googled ? <Icon circular color='teal' name='google' /> : <Icon circular name='google' />}
        {askedStudent ? <Icon circular color='teal' name='talk' /> : <Icon circular name='talk' />}
        {hasDebugged ? <Icon circular color='teal' name='bug' /> : <Icon circular name='bug' />}
        <Button compact floated="right">Contacted</Button>
        <Button compact floated="right">Completed</Button>
      </Card.Content>
    </Card>
  )
}
export default CardExampleExtraContent