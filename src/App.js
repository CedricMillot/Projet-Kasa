import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Data/Home';
import About from './Data/About';
import Navigation from './Data/Navigation';
import Wrongway from './Data/Wrongway';
import Header from './Components/Component/Header';
import Footer from './Components/Component/Footer';
import Bande from './Components/Component/Bande';
import Container from './Components/Component/Container';
import './App.css'; // Importez le fichier App.css ici




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
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="*" element={<Wrongway />} />
        </Routes>
        <Footer />
      </div>
 
  );
}

export default App;