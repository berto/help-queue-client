import React, { Component } from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'

// Components
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Loader from './components/Loader'
import QuestionList from './components/QuestionList'

class App extends Component {
  state = {
    activeMenuItem: 'Questions',
    totalQuestions: 0,
    questions: []
  }

  componentDidMount() {
    fetch('/questions.json')
      .then(res => res.json())
      .then(questions => this.setState({ questions: questions, totalQuestions: questions.length }))
  }

  handleMenuChange = (e, { name }) => this.setState({ activeMenuItem: name })

  render() {
    const { activeMenuItem, totalQuestions, questions } = this.state

    return (
      <div className="App">
        <Header />
        <Container>
          <Sidebar 
            activeItem={activeMenuItem}
            totalQuestions={totalQuestions}
            handleMenuChange={this.handleMenuChange}
          />
          {questions.length ? <QuestionList questions={questions} /> : <Loader />}
        </Container>
      </div>
    );
  }
}

export default App;
