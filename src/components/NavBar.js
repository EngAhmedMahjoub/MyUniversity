import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
    padding: '10px 0',
    background: '#f0f0f0',
    marginBottom: '20px'
};

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden'
};

const liStyle = {
    display: 'inline',
    marginRight: '10px'
};

function NavBar() {
    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}><Link to="/">Home</Link></li>
                <li style={liStyle}><Link to="/map">Map</Link></li>
                <li style={liStyle}><Link to="/about-us">About Us</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
