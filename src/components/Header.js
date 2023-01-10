import React from 'react';
import Navigation from './Navigation'

export default function Header() {
    const [currentPage, setCurrentPage] = useState('Portfolio');

    const renderPage = () => {
        if(currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <header className='header-box'>
                <div className='name'>
                    <h1>
                        Brad D. Wagner
                    </h1>
                    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />                   
                </div>
            </header>
            {renderPage()}
        </div>

    )
}