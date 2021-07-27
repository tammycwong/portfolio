import React from 'react';
import { Link, animateScroll as scroll } from 'react-router-dom';

function NavBar() {

    return (
    <div className="navbar">
        <Link to="/" smooth={true} duration={500}>
            About Me
        </Link>
        <Link to="Projects" >
            Projects
        </Link>
        <Link to="Contact" >
            Contact
        </Link>

    </div>
    
    )
}

export default NavBar;