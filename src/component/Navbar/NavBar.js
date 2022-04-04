import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const NavBar = () => {
    return (
        <div className='bg-color'>
            <nav className='container'>
                <div className="logo text-success">SCHOOL</div>
                <div className="link">
                    <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/">HOME</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/review">REVIEWS</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/dashboard">DASHBOARD</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/blog">BOLOG</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/about">ABOUT</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;