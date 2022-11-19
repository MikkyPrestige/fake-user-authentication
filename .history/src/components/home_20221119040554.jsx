// HOME COMPONENT - This is the main component for the home page
// It contains the main content for the home page

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="home__content">
                <h1 className="home__title">Connect to your Dry Cleaner</h1>
                <p className="home__description"></p>
                <Link to="/projects" className="home__link">Get started</Link>
            </div>
        </div>
    )
}

export default Home;