import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import bitmap_2 from '../../assets/bitmap_2.png';
import submitJoke from '../../assets/path-copy-3@2x.png';

function Footer(props) {
  
  return (
    <footer className="app-footer"  style={{ backgroundImage: `url(${bitmap_2})` }}>
        <div className="container">
            <h2 className='footer-text'>Got jokes? get paid for submitting!</h2>
            <button className='footer-btn-submit-joke'>
                submit joke
                <img src={submitJoke} alt="Submit" />
            </button>
        </div>
    </footer>
  );
}

export default Footer;