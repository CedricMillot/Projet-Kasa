import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import NotFound from "./pages/NotFound/NotFound";
import StayDetails from "./pages/StayDetails/StayDetails";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<StayDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
