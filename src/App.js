import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DrawArea from './draw/DrawArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DrawArea />
      </div>
    );
  }
}

export default App;
