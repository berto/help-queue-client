import React, { Component } from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'

// Components
import Header from './components/Header'
import Sidebar from './components/Sidebar'

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
    return (
      <div className="App">
        <Header />
        <Container>
          <Sidebar 
            activeItem={this.state.activeMenuItem}
            totalQuestions={this.state.totalQuestions}
            handleMenuChange={this.handleMenuChange}
          />
        </Container>
      </div>
    );
  }
}

export default App;
