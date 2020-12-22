import React, {useState} from 'react';
import ReactCSSTransitionGroup from 'react-transition-group'; 

import './BrandContainer.scss';


const BrandContainer= () =>{
    
      
      const [intro, setIntro] = useState(true);

      const magic = () => {
            setIntro(false)
      }

    return(<>

            <button className="brand_container" style={{zIndex: intro? '200' : '-200'}} onClick={() => magic()}>
                <h1 className="titulo" style={{display: intro ? 'block' : 'none',}}>La Galera</h1>
                <h2 className="slogan" style={{display: intro ? 'block' : 'none',}}>MARKET</h2>
            </button>
        </>
    )
}

export default BrandContainer;

