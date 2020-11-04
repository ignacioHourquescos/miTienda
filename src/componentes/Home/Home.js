import React from 'react';
import './Home.css';





const Home= ({greeting}) =>{
    return(
          <h3 className="greeting">{greeting}</h3>
    )
}

export default Home;