import React from 'react';
import './App.css';
import { Navbar, Container } from 'react-bootstrap';
import MortgageCalculator from './MortgageCalculator';


function App() {
  //props.testing = "test";
  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Mortgage Calculator</Navbar.Brand>
        </Navbar>
        <Container id="mainContainer" fluid="true">
          <MortgageCalculator test="test"></MortgageCalculator>
        </Container>
    </div>
  );
}

export default App;
