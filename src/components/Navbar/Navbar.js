import react from 'react';
import React, { useState } from 'react';
import { MenuList } from './MenuList'; // Ensure this file exists with menu items
import '../../css/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='main'>
            <div className="logo">
                VPN<font>Lab</font>
            </div>

            {/* Mobile Menu Icon */}
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>

            {/* Navigation Menu */}
            <ul className={`menu-list ${isMenuOpen ? 'active' : ''}`}>
                {MenuList.map(({ url, title }, index) => (
                    <li key={index}>
                        <a href={url}>{title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

