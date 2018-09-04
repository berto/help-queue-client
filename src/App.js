import React, { Component } from 'react'
import './App.css'
import { Grid } from 'semantic-ui-react'

// Components
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Loader from './components/Loader'
import QuestionList from './components/QuestionList'
import SubmitQuestion from './components/SubmitQuestion'

// API
const apiUrl = 'https://shrike-queue.herokuapp.com/queue'

class App extends Component {
  state = {
    activeMenuItem: 'Questions',
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
      .then(({ data }) => {
        const questions = data.filter(question => !question.completed)
        this.setState({ questions: questions, totalQuestions: questions.length, isLoaded: true })
      })
  )

  handleMenuChange = (e, { name }) => this.setState({ activeMenuItem: name })

  removeQuestion = (id) => {
    fetch(`${this.state.baseUrl}/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(response => {
        this.loadQuestions()
      })
  }

  addQuestion = () => {
    this.loadQuestions()
    this.setState({ activeMenuItem: 'Questions' })
  }

  toggleContacted = (id, contacted) => {
    fetch(`${this.state.baseUrl}/${id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(response => {
        this.loadQuestions()
      })
  }

  render() {
    const { activeMenuItem, totalQuestions, questions, isLoaded, baseUrl } = this.state
    const { handleMenuChange, removeQuestion, addQuestion, toggleContacted } = this

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
            {activeMenuItem === "Submit" && <SubmitQuestion addQuestion={addQuestion} baseUrl={baseUrl} />}
            {activeMenuItem === "Questions" && (isLoaded ? <QuestionList questions={questions} removeQuestion={removeQuestion} toggleContacted={toggleContacted} /> : <Loader />)}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App
