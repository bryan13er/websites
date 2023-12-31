import React, {useState} from 'react'
import {NavLink, Link} from "react-router-dom";
import insta from "../images/pngwing.com.png";
import PhoneIcon from '@mui/icons-material/Phone';

import "./Navbar.css"


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <nav>
            <Link to='/' className="title">Valdivia Painting</Link>
            <div className='mobile phone'>
                <a href="tel:8315212987">
                    <PhoneIcon className="phone-icon"/>
                </a>
            </div>
            
            <div className='mobile'>
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
                    <>
                        <li className="phone-icon-container">
                            <a href="tel:8315212987">
                                <PhoneIcon className="phone-icon"/>
                            </a>
                        </li>
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
                    </>
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
                <li>
                    <NavLink 
                        to="/projects"
                        onClick={closeMenu}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;