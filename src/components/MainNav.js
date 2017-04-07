import React from 'react';
import { Link } from 'react-router';
import Hamburger from './Hamburger';

const MainNav = ({ currentLocation }) => {
    // NavLink from react-router-dom would take care of this normally but I coudn't get it to work. 
    let getActiveClass = (path, currentLocation) => {
        return (path === currentLocation) ? 'nav-item-active' : '';
    }
    return (
        <nav className="nav-main">
            <Hamburger />
            <ul className="ut-unlist">
                <li className={getActiveClass('/', currentLocation)}><Link to="/">Home</Link></li>
                <li className={getActiveClass('/about', currentLocation)}><Link to="/about">The Legend</Link></li>
                <li className={getActiveClass('/work', currentLocation)}><Link to="/work">See His Work</Link></li>
                <li><a href="https://vimeo.com/140548770" target="_blank">2:20 Reel</a></li>
                <li className={getActiveClass('/contact', currentLocation)}><Link to="/contact">Telegram</Link></li>
                <li><a href="http://www.github.com/jasand-pereza" target="_blank">GitHub</a></li>
            </ul>
        </nav>
    );
}

export default MainNav;