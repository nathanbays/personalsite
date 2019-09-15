import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pageHeader">Nathan Bays</div>
        <div className="email"><span className="label">E: </span><a className="label" href="mailto:NB@nathanbays.com">NB@nathanbays.com</a></div>
        <div className="phone"><span className="label">P: </span><a className="label" href="tel:4237946101">423.794.6101</a></div>
      </header>
    </div>
  );
}

export default App;
