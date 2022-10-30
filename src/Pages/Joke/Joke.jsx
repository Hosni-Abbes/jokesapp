import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import handLike from '../../assets/hand@2x.png';
import handDislike from '../../assets/hand-copy@2x.png';
import axios from 'axios';



function Joke({jokesPerNumb, Header, Footer}) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [joke, setJoke] = useState(null);
  const location = useLocation();


  useEffect(()=> {
    if(location){
      const jokeId = location.pathname.replace('/joke/','');
      const findJoke = async () => {
        try {
          const result = await axios.get(`https://api.chucknorris.io/jokes/${jokeId}`);
          setJoke(result.data);
          setLikes(0);
          setDislikes(0);
        }catch(err){
          console.log(err)
        }
      }
      findJoke();
    }
  },[location]);


  const jokeSkelet = () => (
    <div className='jokeSkelet'>
      <div className='skeletCat'></div>
      <div className="skeletTxt">
        <span></span><span></span><span></span>
      </div>
      <div className="skeletLikDislik">
        <div></div><div></div>
      </div>
    </div>
  )
  const topJokesSkelet = () => (
    <div className='topJokeSkelet'>
      <div className='skeletTitle'></div>
      <div className="skeletJokes5">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    </div>
  )



  return (
    <div className="app-container">
      {/* HEADER */}
      <Header />
      <div className="jokeBody">
        <div className="jokeSection">
          {
            joke ?
              <div className="jokeValue">
                {
                joke?.categories?.length
                ? (<h2 className='jokeCategory jobJokes'>{joke?.categories[0]}</h2>)
                : (<h2 className='jokeCategory dadJokes'>Uncategorized</h2>)
                }
                <p className='jokeTxt'>{joke?.value}</p>
                <div className="likes">
                  <button className='likeBtn' 
                        onClick={()=>{setLikes(prev => prev+1)}}>
                    <img src={handLike} alt="Like" />
                  </button>
                  <span>{likes}</span>
                </div>
                <div className="dislikes">
                  <button className='dislikeBtn' onClick={()=>{setDislikes(prev => prev+1)}}>
                    <img src={handDislike} alt="Dislike" />
                  </button>
                  <span>{dislikes}</span>
                </div>
              </div>
            : jokeSkelet()
          }
        </div>

        <div className="seeMoreJokes">
          <h3>Top 5 Jokes</h3>
          {
            jokesPerNumb.length ?
            jokesPerNumb?.slice(0, 5).map((joke,i)=>(
              <NavLink to={`/joke/${joke?.id}`} className="linkToJoke" key={i}  >
                {joke?.value}...
              </NavLink>
            ))
            : topJokesSkelet()
          }
        </div>
      </div>  


      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Joke;

