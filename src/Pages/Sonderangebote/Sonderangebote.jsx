import React, { useEffect } from 'react'


function Sonderangebote(props) {

  //  change doc title 
  useEffect(()=>{
    document.title = 'SONDERANGEBOTE'
  },[])


  return (
    <div className='app-container'>
        {/* HEADER */}
        <props.Header />
      
        <div className="app-body">
            Sonderangebote
        </div>
            
        {/* FOOTER */}
        <props.Footer />

    </div>
  );
}

export default Sonderangebote;