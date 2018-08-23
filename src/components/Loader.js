import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const QuestionLoader = () => (
  <Dimmer inverted active>
    <Loader inverted content='Loading' />
  </Dimmer>
)

export default QuestionLoader
