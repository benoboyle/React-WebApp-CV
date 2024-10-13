import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1> Ben O'Boyle </h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/TechStack">Tech Stack</Link></li>
            </ul>
        </nav>

    );

};

export default Navbar;