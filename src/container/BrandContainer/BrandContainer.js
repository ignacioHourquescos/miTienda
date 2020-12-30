import React, {useState} from 'react';
import ReactCSSTransitionGroup from 'react-transition-group'; 
import galera from '../../images/galera.png';
import './BrandContainer.scss';


const BrandContainer= () =>{
    
      
      const [intro, setIntro] = useState(true);

      const magic = () => {
            setTimeout(function (){setIntro(false);},0)
            
            
      }

    return(<>

            <button className="brand_container" style={{display: intro ? 'block' : 'none'}} onClick={() => magic()}>
                <img className="go_home_icon" src= {galera} />
                <h1 className="titulo" style={{display: intro ? 'block' : 'none',}}>La Galera</h1>
                <h2 className="slogan" style={{display: intro ? 'block' : 'none',}}>MARKET</h2>
            </button>
        </>
    )
}

export default BrandContainer;

