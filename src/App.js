import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/display-page/Home';
import Growth from './components/home-growth/Growth';
import Community from './components/home-community/Community';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Growth/>
      <Community/>
    </div>
  );
}

export default App;
