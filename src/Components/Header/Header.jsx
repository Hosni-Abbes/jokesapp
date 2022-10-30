import axios from 'axios';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import SearchForJoke from '../SearchForJoke/SearchForJoke';
import bitmap from '../../assets/bitmap.png';
import backArrow from '../../assets/arrow-left-copy-2.png';

function Header(props) {
    const [toggle, setToggle] = useState(true);

// Toggle nav menu
const toggleMenu = () => {
    if(toggle){
        document.querySelector('.nav-items').style.display = 'flex';
        document.querySelector('.header-nav').style.height = 'auto';

        setToggle(!toggle);
    }else{
        document.querySelector('.nav-items').style.display = 'none';
        document.querySelector('.header-nav').style.height = '70px';

        setToggle(!toggle);
    }
}
  
  return (
    <header className="app-header">
        <nav className="header-nav">
            <div className="container">
                <NavLink className="arrowBack" to="/">
                    <img src={backArrow} alt="Back" />
                </NavLink>
                <div className="nav-items">
                    <NavLink to='/sofunktionierts' className="header-page">So Funktioniert's</NavLink>
                    <NavLink to='/sonderangebote' className="header-page">Sonderangebote</NavLink>
                    <NavLink exact='true' to='/' className="header-page">Mein Bereich</NavLink>
                </div>
                <button className='menu-btn' onClick={()=>{toggleMenu()}}>
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
        <div className="header-bitmap"  style={{ backgroundImage: `url(${bitmap})` }} >
            <h2 className='the-joke-bible'>The Joke Bible</h2>
            <p>Daily Laughs for you and yours</p>
            <SearchForJoke />
        </div>
    </header>
  );
}

export default Header;