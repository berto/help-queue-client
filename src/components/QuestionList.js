import React from 'react'
import { Segment, Card, Header } from 'semantic-ui-react'

// Components
import Question from "./Question";

const QuestionList = ({ questions }) => {
  const cards = questions.map(question => (<Question key={question.id} question={question} />))

  return (
    <React.Fragment>
      <Header as="h2" content="Questions" />
      <Card.Group itemsPerRow={1}>
        {cards}
      </Card.Group>
    </React.Fragment>
  )
}

export default QuestionList
