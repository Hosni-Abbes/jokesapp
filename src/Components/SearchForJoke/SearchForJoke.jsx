import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

// import searchIcon from '../../assets/search-copy.png';

function SearchForJoke() {
    const [JokesFounded, setJokesFounded] = useState(null);
    const [category, setCategory] = useState('');

    useEffect(()=>{
        const result = async () => {
            try{
                const res = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
                if(res.status == 200) {
                    setJokesFounded(res.data);
                }
            }catch(err){
                // console.log(err);
                setJokesFounded(null);
            }
        }
        result();
    },[category]);
  
    return (
        <form className='search-form' action="" method="post">
            <select name="search" placeholder='How can we make you laugh today?'
                    onChange={(e)=>{setCategory(e.target.value)}} >
                        <option value="">Choose joke category</option>
                        <option value="dev">Dev</option>
                        <option value="animal">Animal</option>
                        <option value="career">Career</option>
                        <option value="celebrity">Celebrity</option>
                        <option value="explicit">Explicit</option>
                        <option value="fashion">Fashion</option>
                        <option value="food">Food</option>
                        <option value="history">History</option>
                        <option value="money">Money</option>
                        <option value="movie">Movie</option>
                        <option value="music">Music</option>
                        <option value="political">Political</option>
                        <option value="religion">Religion</option>
                        <option value="science">Science</option>
                        <option value="sport">Sport</option>
                        <option value="travel">Travel</option>
                    </select>

            {
                JokesFounded
                ? <div className={category ? 'jokesInSearch' : 'd-none'}>
                    <NavLink className="linkToJoke" to={`/joke/${JokesFounded?.id}`}
                    onClick={()=>{setCategory('')}}>{JokesFounded.value}</NavLink>
                  </div>
                : null
            }


        </form>
    );
}

export default SearchForJoke;

