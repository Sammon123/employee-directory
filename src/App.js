import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';

class App extends Component {
  state = {
    employee: [
      {
        id: 1,
        name: 'Peter Sammon',
        title: 'associate',
        hours: 'day shift',
        type: 'full time',
        benefits: 'Medical'
      },
      {
        id: 2,
        name: 'John Doe',
        title: 'associate',
        hours: 'evening shift',
        type: 'full time',
        benefits: 'none'
      },
      {
        id: 3,
        name: 'Dave "Larry" Allen',
        title: 'associate',
        hours: 'night shift',
        type: 'part time',
        benefits: 'Medical, Dental'
      }
    ]
  }

  render() {
    const employees = this.state.employee.map((id, name) => {
      <li key={employee.id}>{employee.name}</li>
    })
    return (
      <div className="App" >
        <Header />
        <ul>
          {this.employee}
        </ul>
    );
      </div>
  }
}

export default App;
