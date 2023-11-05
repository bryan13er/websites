import './App.css';
import React from "react";
import {Route, HashRouter, Routes} from "react-router-dom";

import Navbar from './Component/Navbar';
import Home from "./Component/Pages/Home";
import About from './Component/Pages/About';
import Services from './Component/Pages/Services';
// import PastProjects from './Component/Pages/PastProjects';
// import Contact from './Component/Pages/Contact';


function App() {
    return(
      <HashRouter>
        <Navbar />
        <div>
          <Routes>
            <Route exact="true" path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
          </Routes>
        </div>
      </HashRouter>
    );
}

export default App;