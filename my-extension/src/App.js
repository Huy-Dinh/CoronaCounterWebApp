import React from 'react';
import logo from './logo.svg';
import {LiveCounterDisplay} from './LiveCounterDisplay'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div class="App-body">
        <LiveCounterDisplay />
      </div>
    </div>
  );
}

export default App;
