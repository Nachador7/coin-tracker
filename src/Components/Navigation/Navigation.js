import React, { useState } from 'react';
import { FaTwitter, FaDiscord, FaBars } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navigation">
            <div className='f2 coinharbor'>
                COINHARBOR
            </div>
            <FaBars className='burger' onClick={toggleMenu} />
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href='#home' onClick={closeMenu}>Home</a></li>
                <li><a href='#market' onClick={closeMenu}>Market</a></li>
                <li><a href='#choose' onClick={closeMenu}>Choose Us</a></li>
                <li><a href="#join" onClick={closeMenu}>Join</a></li>
            </ul>
            <div className='social-media'>
                <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className='twitter f3 mr3' />
                </a>
                <a href="https://discord.gg/your_discord_invite_link" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className='discord f3' />
                </a>
            </div>
        </nav>
    );
};

export default Navigation;