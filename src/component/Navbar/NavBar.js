import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const NavBar = () => {
    return (
        <div className='bg-color'>
            <nav className='container'>
                <div className="logo">SCHOOL</div>
                <div className="link">
                    <Link className='link' to="/">HOME</Link>
                    <Link className='link' to="/review">REVIEWS</Link>
                    <Link className='link' to="/dashboard">DASHBOARD</Link>
                    <Link className='link' to="/blog">BOLOG</Link>
                    <Link className='link' to="/about">ABOUT</Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;