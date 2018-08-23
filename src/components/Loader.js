import React from 'react'
import { Dimmer, Loader, Segment, Container } from 'semantic-ui-react'

const QuestionLoader = () => (
  <Container id="loading-segment">
    <Dimmer inverted active>
      <Loader inverted content='Loading' />
    </Dimmer>
  </Container>
)

export default QuestionLoader
