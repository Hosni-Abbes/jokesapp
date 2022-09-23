import React, { useEffect } from 'react'


function Notfound(props) {

  //  change doc title 
  useEffect(()=>{
    document.title = 'Notfound'
  },[])


  return (
    <div className='app-container'>      
        <div className="app-body">
          <div className="not-found">
            <p>Woops!</p>
            <p>Page Not Found!</p>
          </div>
        </div>
    </div>
  );
}

export default Notfound;