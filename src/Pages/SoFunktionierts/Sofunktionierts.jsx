import React, { useEffect } from 'react'


function Sofunktionierts(props) {

  //  change doc title 
  useEffect(()=>{
    document.title = "SO FUNKTIONIERT'S"
  },[])


  return (
    <div className='app-container'>
        {/* HEADER */}
        <props.Header />

        <div className="app-body">
            Sofunktionierts
        </div>
    
        {/* FOOTER */}
        <props.Footer />
      
    </div>
  );
}

export default Sofunktionierts;