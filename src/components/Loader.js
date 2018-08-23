import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const QuestionLoader = () => (
  <Segment id="loading-segment">
    <Dimmer inverted active>
      <Loader inverted content='Loading' />
    </Dimmer>
  </Segment>
)

export default QuestionLoader
