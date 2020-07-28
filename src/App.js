import React from 'react';
import Header from './components/Header'
import './App.css';

function App() {
  // state = {
  //   employee: [
  //     {
  //       id: 1,
  //       name: 'Peter Sammon',
  //       title: 'associate',
  //       hours: 'day shift',
  //       type: 'full time',
  //       benefits: 'Medical'
  //     },
  //     {
  //       id: 2,
  //       name: 'John Doe',
  //       title: 'associate',
  //       hours: 'evening shift',
  //       type: 'full time',
  //       benefits: 'none'
  //     },
  //     {
  //       id: 3,
  //       name: 'Dave "Larry" Allen',
  //       title: 'associate',
  //       hours: 'night shift',
  //       type: 'part time',
  //       benefits: 'Medical, Dental'
  //     }
  //   ]
  // }
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
