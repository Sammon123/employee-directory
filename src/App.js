import React, { Component } from 'react';
import Header from './components/Header'
import Employees from './components/Employees'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Employees />
      </div>
    );
  }
}

export default App;
