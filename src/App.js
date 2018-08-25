import React, { Component } from 'react'
import './App.css'
import { Container, Grid, GridColumn } from 'semantic-ui-react'

// Components
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Loader from './components/Loader'
import QuestionList from './components/QuestionList'
import SubmitQuestion from './components/SubmitQuestion'

// API
const apiUrl = '/questions.json'

class App extends Component {
  state = {
    activeMenuItem: 'Submit',
    totalQuestions: 0,
    questions: [],
    isLoaded: false,
    baseUrl: apiUrl
  }

  componentDidMount() {
    this.loadQuestions()
  }

  loadQuestions = () => (
    fetch(this.state.baseUrl)
      .then(res => res.json())
      .then(questions => this.setState({ questions: questions, totalQuestions: questions.length, isLoaded: true }))
  )

  handleMenuChange = (e, { name }) => this.setState({ activeMenuItem: name })

  removeQuestion = (id) => {
    const newQuestions = this.state.questions.filter(question => question.id !== id)
    this.setState({questions: newQuestions, totalQuestions: newQuestions.length})
  }

  render() {
    const { activeMenuItem, totalQuestions, questions, isLoaded } = this.state
    const { handleMenuChange, removeQuestion } = this

    return (
      <div className="App">
        <Header />
        <Grid stackable container>
          <Grid.Column width={4}>
            <Sidebar 
              activeItem={activeMenuItem}
              totalQuestions={totalQuestions}
              handleMenuChange={handleMenuChange}
            />
          </Grid.Column>
          <Grid.Column width={12}>
            {activeMenuItem === "Submit" && <SubmitQuestion />}
            {activeMenuItem === "Questions" && (isLoaded ? <QuestionList questions={questions} removeQuestion={removeQuestion}/> : <Loader />)}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App
