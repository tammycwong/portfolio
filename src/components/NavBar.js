import React from 'react';
import { Link } from 'react-scroll';

function NavBar() {

    return (
    <div className="navbar">
        <Link to="/" smooth={true} duration={1000}>
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