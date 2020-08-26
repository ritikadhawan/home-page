import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/display-page/Home';
import Growth from './components/home-growth/Growth';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Growth/>
    </div>
  );
}

export default App;
