<<<<<<< HEAD
import './assets/fomantic/dist/semantic.css';
//import { Container, Header } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
=======
import React, { Component } from 'react'
import 'fomantic-ui-css/semantic.css'
import { Container, Header } from 'semantic-ui-react';
class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          Fomantic-UI & Semantic-UI-React
        </Header>
      </Container>
    );
  }
>>>>>>> d6f08fb (fixed semantic install)
}

export default App;