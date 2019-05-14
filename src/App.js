import React from 'react';
import './App.css';

import { Navbar, Container, CardDeck } from 'react-bootstrap';
import MortgageCalculator from './MortgageCalculator';

class App extends React.Component{
  render() {
    return (
      <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Mortgage Calculator</Navbar.Brand>
          </Navbar>
          <Container id="mainContainer" fluid="true">
            <CardDeck>
              <MortgageCalculator></MortgageCalculator>
            </CardDeck>
          </Container>
      </div>
    );
  }
}

export default App;