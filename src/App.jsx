import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Nosotros from "./views/Nosotros/Nostros";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
      </Routes>
    </div>
  );
}

export default App;
