import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import SummaryOfResume from './Pages/SummaryOfResume/SummaryOfResume';

function App() {
  return (
    <BrowserRouter>
      <section id='home'>
        <Home/>
      </section>
      <section id='aboutme'>
        <AboutMe/>
      </section>
      <section id='summary'>
        <SummaryOfResume/>
      </section>
    </BrowserRouter>
  );
}

export default App;
