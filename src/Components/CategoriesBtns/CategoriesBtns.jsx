import axios from 'axios';
import React, { useRef, useState } from 'react';

import categoryViewAllIcon from '../../assets/path-copy-7.png';

function CategoriesBtns(props) {
  
  return (
    <div className="joke-categories">
        <button className='joke-category-btn red'>Adult jokes</button>
        <button className='joke-category-btn pastel-orange'>Dad jokes</button>
        <button className='joke-category-btn pale-orange'>Christmas jokes</button>
        <button className='joke-category-btn light-gold'>Job jokes</button>
        <button className='joke-category-btn kiwi-green'>Birthday jokes</button>
        <button className='joke-category-btn weird-green'>Social jokes</button>
        <button className='joke-category-btn blue'>Puns jokes</button>
        <button className='joke-category-btn transparent'>View all <img src={categoryViewAllIcon} alt="View all" /></button>
        
    </div>
  );
}

export default CategoriesBtns;

