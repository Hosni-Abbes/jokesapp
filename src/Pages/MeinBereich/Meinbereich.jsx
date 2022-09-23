import React, { useEffect } from 'react'

// Import Jokes Component
import Jokes from '../../Components/Jokes/Jokes';

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
            <Jokes />
            
        </div>
    
        {/* FOOTER */}
        <props.Footer />

    </div>
  );
}

export default Meinbereich;