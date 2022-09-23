import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CategoriesBtns from '../CategoriesBtns/CategoriesBtns';
import Joke from '../../Pages/Joke/Joke';

import loadMore from '../../assets/path-copy-7.png';



function Jokes(props) {
  const [allJokes, setAllJokes] = useState([]);
  const [jokesPerNumb, setJokesPerNumb] = useState([]);
  const [jokesLimit, setJokesLimit] = useState(7);

  // Get all Jokes function
  useEffect(()=>{
    const getAllJokes = async ()=>{
      try{
        const res = await axios.get(`https://api.chucknorris.io/jokes/search?query=all`);
        // setAllJokes(...res.data.result);
        console.log(res.data)
        let jokesArr = [];
        for(let i=0; i<jokesLimit;i++){
          jokesArr.push(res.data.result[i]);
        }
        setJokesPerNumb(jokesArr);
      }catch(err){
        console.log(err);
      }
    }
    getAllJokes();
  },[jokesLimit]);



  // Loading More Jokes
  const loadMoreJokes = () => {
    return null
  }
  
  return (
    <div className="container">
        <div className="jokes-container">
        <CategoriesBtns />
        
        {/* Jokes Rendering */}
        <div className="all-jokes">
          {
            // Render all Jokes
            jokesPerNumb.map((joke, index) => (
              <Joke joke={joke} key={index} />
            ))
          }
        </div>
         <button className='view-more-jokes' onClick={()=>{setJokesLimit(jokesLimit+7)}}>View More <img src={loadMore} alt="View more" /></button>
        
        </div>
    </div>
  );
}

export default Jokes;

