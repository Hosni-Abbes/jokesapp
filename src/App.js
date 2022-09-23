import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


import Meinbereich from './Pages/MeinBereich/Meinbereich';
import Sofunktionierts from './Pages/SoFunktionierts/Sofunktionierts';
import Sonderangebote from './Pages/Sonderangebote/Sonderangebote';
import Joke from './Pages/Joke/Joke';
import Notfound from './Pages/Notfound/Notfound';

import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact='true' path="/" element={ <Meinbereich Header={Header} Footer={Footer} /> }  />
          <Route path="/sonderangebote" element={  <Sonderangebote Header={Header} Footer={Footer} /> } />
          <Route path="/sofunktionierts" element={  <Sofunktionierts Header={Header} Footer={Footer} /> } />
          <Route path="/joke/:id" element={  <Joke Header={Header} Footer={Footer} /> } />
          <Route path="/:any" element={ <Notfound /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
