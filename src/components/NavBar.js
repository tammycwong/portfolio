import React from 'react';
import { Link, animateScroll as scroll} from 'react-scroll';

function NavBar() {

    return (
    <div className="navbar">
        <Link to="about-section" smooth={true} duration={1000}>
            About Me
        </Link>
        <Link to="projects-section" smooth={true} duration={1000}>
            Projects
        </Link>
        <Link to="contact-section" smooth={true} duration={1000}>
            Contact
        </Link>
       <Link to="" className="resume">
           Resume
       </Link>

    </div>
    
    )
}

export default NavBar;