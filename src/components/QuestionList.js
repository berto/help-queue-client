import React, { Fragment } from 'react'
import { Card, Header } from 'semantic-ui-react'

// Components
import Question from "./Question";

const QuestionList = ({ questions, removeQuestion, toggleContacted }) => {
  const cards = questions.map(question => (<Question key={question.id} question={question} removeQuestion={removeQuestion} toggleContacted={toggleContacted} />))

  return (
    <Fragment>
      <Header as="h2" content="Questions" />
      <Card.Group itemsPerRow={1}>
        {cards}
      </Card.Group>
    </Fragment>
  )
}

export default QuestionList
