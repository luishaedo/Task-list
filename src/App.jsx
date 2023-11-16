import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react'
import Home from "./views/Home/Home"
import Landing from "./views/Landing/Landing"



function App() {
  

  return (
    <Routes>
      <Route exact path="/" element={<Landing />}/>
      <Route exact path="/home" element={<Home />}/>
    </Routes>
  )
}

export default App
