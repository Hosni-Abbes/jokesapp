import axios from 'axios';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import bitmap from '../../assets/bitmap.png';
import searchIcon from '../../assets/search-copy.png';

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
            <form className='search-form' action="" method="post">
                <input type="text" name="search" placeholder='How can we make you laugh today?' />
                <button type='submit'>
                    <img src={searchIcon} alt="Search" />
                </button>

            </form>
        </div>
    </header>
  );
}

export default Header;