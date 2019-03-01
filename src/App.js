import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './components/Top';
import Middle from './components/Middle';
import Bottom from './components/Bottom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Middle />
        <Bottom />
      </div>
    );
  }
}

export default App;
