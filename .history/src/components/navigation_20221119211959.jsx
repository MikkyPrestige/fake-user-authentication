// LAYOUT COMPONENT

import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
    return (
        <div className="layout">
            <div className="layout__content">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;

// HOME COMPONENT

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './navigation';
import "../assets/styles/home.css";

const Home = () => {
    return (
        <Layout>
            <h1 className="home__title">Connect to your Dry Cleaner</h1>
            <p className="home__description">Wash & fold, drop off and pickup & delivery laundry service in Asaba, Delta State.</p>
            <Link to="/" className="home__link">Get started</Link>
        </Layout>
    )
}