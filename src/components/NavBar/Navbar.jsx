import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';
function Navbar() {
    return (
        <>

            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/animes">Animes</Link>
                    <Link to="/contact">Contato</Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar
