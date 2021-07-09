import React from 'react';
import {NavLink} from 'react-router-dom';

function navbar(){
    return(
        <>
         <nav className="navbar">
             <div className="nav-container">
                <NavLink exact to='/' className="nav-logo">
                    <span>Ghoshak</span>
                </NavLink>
                <ul className="nav-menu">
                    <li className="nav-item">
                    <NavLink exact to='/home' className="nav-links">
                        Home
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact to='/aboutus' className="nav-links">
                        AboutUs
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact to='/contact' className="nav-links">
                        Contact
                    </NavLink>
                    </li>
                </ul>
             </div>
         </nav>
        </>
    )
}

export default navbar;