import React, {useState} from 'react'
import {NavLink, Link} from "react-router-dom";
import insta from "../images/pngwing.com.png";

import "./Navbar.css"


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <nav>
            <Link to='/' className="title">Valdivia Painting</Link>
            <div
                className='mobile'
            >
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={insta}
                        alt="Instagram"
                        className="mobileInsta"
                    />
                </a>
            </div>
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
                {!menuOpen && (
                    <li>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={insta}
                                alt="Instagram"
                                className="instagram-icon"
                            />
                        </a>
                    </li>
                )}
                <li>
                    <NavLink 
                        exact="true" 
                        to="/"
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about"
                        onClick={closeMenu}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/services"
                        onClick={closeMenu}
                    >
                        Services
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;