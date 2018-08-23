import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const CardExampleExtraContent = ({ question }) => {
  console.log(question)
  const { location } = question
  
  return (
    <Card>
      <Card.Content><Card.Header>{question.name} - {location}</Card.Header></Card.Content>
      <Card.Content description={question.question} />
      <Card.Content extra>
        <Icon name='user' />
        4 Friends
      </Card.Content>
    </Card>
  )
}
export default CardExampleExtraContent