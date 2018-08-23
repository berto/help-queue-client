import React, { Component } from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'

// Components
import Header from './components/Header'
import Sidebar from './components/Sidebar'

class App extends Component {
  state = {
    activeMenuItem: 'Questions',
    totalQuestions: 5
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
