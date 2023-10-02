import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Data/Home';
import About from './Data/About';
import Navigation from './Data/Navigation';
import Wrongway from './Data/Wrongway';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Bande from './Components/Bande';
import Container from './Components/Container';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Bande imageSrc="/Paysage.jpg" />
          <Home />
          <Container/>
        </>} />
        <Route path="/about" element={<>
          <Bande imageSrc="/Paysage2.jpg" /> 
          <About />
        </>} />
        <Route path="/contact" element={<Navigation />} />
        <Route path="*" element={<Wrongway />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;