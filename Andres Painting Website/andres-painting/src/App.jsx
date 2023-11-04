import './App.css';
import React from "react";
import {Route, NavLink, HashRouter, Routes} from "react-router-dom";

import Home from "./Component/Home";
import About from './Component/About';
import Services from './Component/Services';
import PastProjects from './Component/PastProjects';
import Contact from './Component/Contact';


class App extends React.Component {
  render() {
    return(
      <HashRouter>
        <h1 className="title">Valdivia Painting</h1>
        <ul className="navigation">
          <li><NavLink exact="true" to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
        </ul>
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
}

export default App;