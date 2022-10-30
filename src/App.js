import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';



import Joke from './Pages/Joke/Joke';


import Meinbereich from './Pages/MeinBereich/Meinbereich';
import Sofunktionierts from './Pages/SoFunktionierts/Sofunktionierts';
import Sonderangebote from './Pages/Sonderangebote/Sonderangebote';
// import Joke from './Pages/Joke/Joke';
import Notfound from './Pages/Notfound/Notfound';

import './App.css';

function App() {
  const [allJokes, setAllJokes] = useState([]);
  const [jokesPerNumb, setJokesPerNumb] = useState([]);
  const [jokesLimit, setJokesLimit] = useState(7);

  // Get all Jokes function
  useEffect(()=>{
    const getAllJokes = async ()=>{
      try{
        const res = await axios.get(`https://api.chucknorris.io/jokes/search?query=all`);
        // setAllJokes(...res.data.result);
        // console.log(res.data)
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




  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact='true' path="/" element={ <Meinbereich jokesPerNumb={jokesPerNumb} setJokesLimit={setJokesLimit} jokesLimit={jokesLimit} Header={Header} Footer={Footer} /> }  />
          <Route path="/sonderangebote" element={  <Sonderangebote Header={Header} Footer={Footer} /> } />
          <Route path="/sofunktionierts" element={  <Sofunktionierts Header={Header} Footer={Footer} /> } />
          <Route path="/joke/:id" element={  <Joke jokesPerNumb={jokesPerNumb} Header={Header} Footer={Footer} /> } />
          <Route path="/:any" element={ <Notfound /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
