import React, { useState } from 'react';
import Navigation from './Navigation'
import Project from './pages/Project'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'


export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if(currentPage === 'Portfolio') {
            return <Project />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <header className='header-box'>
                <div className='name'>
                    <h1>
                        Brad D. Wagner
                    </h1>
                </div>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />    
            </header>
            <div className='spacer'></div>
            {renderPage()}
        </div>

    )
}