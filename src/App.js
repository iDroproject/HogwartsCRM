import React from 'react';
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavBar/>
          <Home />
        </div>
      </header>
    </div>
  );
}

export default App;
