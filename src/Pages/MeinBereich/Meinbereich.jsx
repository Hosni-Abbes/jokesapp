import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import Joke from '../../Pages/Joke/Joke';
import CategoriesBtns from '../../Components/CategoriesBtns/CategoriesBtns';
import loadMore from '../../assets/path-copy-7.png';
import seeStats from '../../assets/path-copy.png';
import lightFlash from '../../assets/green-light-copy.png';


function Meinbereich(props) {

  //  change doc title 
  useEffect(()=>{
    document.title = 'MEIN BEREICH'
  },[])


  return (
    <div className='app-container'>
        {/* HEADER */}
        <props.Header />
        
        {/* APP BODY */}
        <div className="app-body">
            {/* ALL Jokes */}
            <div className="container">
        <div className="jokes-container">
        <CategoriesBtns />
        
        {/* Jokes Rendering */}
        <div className="all-jokes">
          {
            // Render all Jokes
            props.jokesPerNumb.map((joke, i) => (
              <div key={i} className="joke-statics">
                <div className="joke-text">
                  
                  {joke?.categories.length ? (<h2 className='joke-categ'><img src={lightFlash} /> {joke?.categories[0]}</h2>) : (<h2 className='joke-categ'><img src={lightFlash} /> Uncategorized</h2>)}
                    <p>
                      {
                      joke?.value.length < 220 
                      ? joke?.value 
                      : `${joke?.value.substring(0, 200)}...`
                      }
                    </p>
                    <NavLink to={`/joke/${joke?.id}`} className="see-stats">
                        See stats
                        <img src={seeStats} alt="See Stats" />
                    </NavLink>
                </div>
            </div>
            ))
          }
        </div>
         <button className='view-more-jokes' onClick={()=>{props.setJokesLimit(props.jokesLimit+7)}}>View More <img src={loadMore} alt="View more" /></button>
        
        </div>
    </div>
            
        </div>
    
        {/* FOOTER */}
        <props.Footer />

    </div>
  );
}

export default Meinbereich;