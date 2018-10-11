import React, { Component, Fragment } from 'react'
import './App.css'
import { Grid, Header } from 'semantic-ui-react'
import uuid from 'uuid/v4'

// Components
import MainHeader from './components/Header'
import Sidebar from './components/Sidebar'
import Loader from './components/Loader'
import QuestionList from './components/QuestionList'
import SubmitQuestion from './components/SubmitQuestion'

// API
const host = 'shrike-queue.heroku.com'
const apiUrl = `https://${host}/queue`

// Websocket
let socket = { readyState: 3 }
if ('WebSocket' in window) {
  socket = new WebSocket(`wss://${host}/ws`)
}

// Notification
const clientId = uuid()
const logo = './galvanize.png'
let notificationStatus = 'none'
if ('Notification' in window) {
  notificationStatus = localStorage.notify || Notification.permission
}

class App extends Component {
  state = {
    activeMenuItem: 'Questions',
    totalQuestions: 0,
    questions: [],
    isLoaded: false,
    baseUrl: apiUrl,
    socket,
    notificationStatus,
    stopNotification: false
  }

  componentDidMount() {
    this.loadQuestions()
    this.requestNotification()
    this.setUpSocket()
  }

  setUpSocket = () => {
    this.setState((prevState) => {
      prevState.socket.onmessage = (message) => {
        const data = JSON.parse(message.data)
        this.loadQuestions()
        if (this.state.notificationStatus === 'granted' && data.clientId !== clientId && !data.preventNotification && !this.state.stopNotification) {
          new Notification(`${data.name}: ${data.question}`, {icon: logo})
        }
      }
      return prevState
    })
  }

  requestNotification = () => {
    if (this.state.notificationStatus === 'none') {
      this.state.setState({ stopNotification: true })
    } else if (this.state.notificationStatus === 'default') {
      Notification.requestPermission()
        .then((notificationStatus) => {
          this.setState({ notificationStatus })
        })
    }
  }

  toggleNotification = (granted) => {
    if (granted) {
      localStorage.setItem('notify', 'denied')
      this.setState({ notificationStatus: 'denied'})
    } else {
      localStorage.setItem('notify', 'granted')
      this.setState({ notificationStatus: 'granted' })
    }
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
      .then(() => {
        if (this.state.socket.readyState === 1) {
          this.state.socket.send(JSON.stringify({ preventNotification: true }))
        }
        this.loadQuestions()
      })
  }

  addQuestion = (data) => {
    if (this.state.socket.readyState === 1) {
      let message = data[0]
      message.clientId = clientId
      this.state.socket.send(JSON.stringify(message))
    }
    this.loadQuestions()
    this.setState({ activeMenuItem: 'Questions' })
  }

  toggleContacted = (id, contacted) => {
    fetch(`${this.state.baseUrl}/${id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(() => {
        if (this.state.socket.readyState === 1) {
          this.state.socket.send(JSON.stringify({ preventNotification: true }))
        }
        this.loadQuestions()
      })
  }

  render() {
    const { activeMenuItem, totalQuestions, questions, isLoaded, baseUrl, notificationStatus, stopNotification } = this.state
    const { handleMenuChange, removeQuestion, addQuestion, toggleContacted, toggleNotification } = this

    return (
      <div className="App">
        <MainHeader stopNotification={stopNotification} notificationStatus={notificationStatus} toggleNotification={toggleNotification} />
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
            {activeMenuItem === "Questions" && (isLoaded ? <QuestionList questions={questions} removeQuestion={removeQuestion} toggleContacted={toggleContacted} /> : <Fragment><Header as="h2" content="Questions" /><Loader /></Fragment>)}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App
