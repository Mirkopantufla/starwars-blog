import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home.jsx";
import CharacterInfo from "./pages/CharacterInfo.jsx";
import PlanetInfo from "./pages/PlanetInfo.jsx";
import Footer from "./components/Footer.jsx";
import injectContext from "./context/AppContext.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people/:theid" element={<CharacterInfo />} />
          <Route path="/planets/:theid" element={<PlanetInfo />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(App);