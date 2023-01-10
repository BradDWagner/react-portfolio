import React, { useState } from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
    return(
        <nav className="nav-bar">
            <ul>
                <li>
                    <a 
                        href="#about-me"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nave-link'}
                    >
                        About Me
                    </a>
                </li>
                <li>
                    <a 
                        href="#work"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Work
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}