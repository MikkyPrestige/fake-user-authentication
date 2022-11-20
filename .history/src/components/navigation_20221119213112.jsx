// NAVIGATION COMPONENT

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className="navigation">
            <NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: 'black'}} to="/" className="navigation__link" activeClassName="navigation__link--active" exact>Home</NavLink>
            <NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: 'black'}} to="/about" className="navigation__link" activeClassName="navigation__link--active">Sign In</NavLink>
            <NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: 'black'}} to="/contact" className="navigation__link" activeClassName="navigation__link--active">Join Now</NavLink>
        </nav>
    )
}

export default Navigation;