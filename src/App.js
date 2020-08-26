import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/display-page/Home';
import Growth from './components/home-growth/Growth';
import Community from './components/home-community/Community';
import About from './components/about-section/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Growth/>
      <Community/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
