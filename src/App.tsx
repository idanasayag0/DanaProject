
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Studio from './components/Studio';
import HomeVisit from './components/HomeVisit';
import WhoCanBenefit from './components/WhoCanBenefit';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
          <Studio />
        <HomeVisit />
        <WhoCanBenefit /> 
        <Contact />
      </main>
       <Footer /> 
    </div>
  );
};

export default App;