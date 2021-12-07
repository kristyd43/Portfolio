import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Header from "./Pages/Header";
import AboutMe from "./components/aboutMe/aboutMe";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}
export default App;
