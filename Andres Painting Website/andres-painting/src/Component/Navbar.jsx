import React, {useState} from 'react'
import {NavLink, Link} from "react-router-dom";

import "./Navbar.css"


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <Link to='/' className="title">Valdivia Painting</Link>
            <div 
                className="menu"
                onClick={() => {
                    setMenuOpen(!menuOpen)
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink exact="true" to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;