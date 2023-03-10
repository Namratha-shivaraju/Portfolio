import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Contact />
      
    </main>
    <Footer />
    </>
  )
}


export default App;
