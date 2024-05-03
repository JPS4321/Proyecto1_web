import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/">Sobre el creador</a></li>
                <li className="nav-item"><a href="/">Blogs Recomendados</a></li>
                <li className="nav-item"><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
