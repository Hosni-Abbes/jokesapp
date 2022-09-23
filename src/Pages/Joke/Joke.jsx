import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


import seeStats from '../../assets/path-copy.png';
import lightFlash from '../../assets/green-light-copy.png';

function Joke({joke}) {

  return (
    <div className="joke-statics">
        <div className="joke-text">
          
          {joke?.categories.length ? (<h2 className='joke-categ'><img src={lightFlash} /> {joke?.categories[0]}</h2>) : (<h2 className='joke-categ'><img src={lightFlash} /> Uncategorized</h2>)}
            <p>{joke?.value}</p>
            <NavLink to={`/joke/${joke?.id}`} className="see-stats">See stats <img src={seeStats} alt="See Stats" /></NavLink>
        </div>
    </div>
  );
}

export default Joke;

