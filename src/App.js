import React, { Component } from 'react';
import Header from './components/Header'
import Employees from './components/Employees'
import Search from './components/Search'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Search />
        <Employees />
      </div>
    );
  }
}

export default App;
