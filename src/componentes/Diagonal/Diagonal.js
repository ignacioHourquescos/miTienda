import React from 'react';
import './Diagonal.scss';


const Bubble= () =>{
    return(
        <div className="diagonal">
            <svg className="diagonal_fixed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110" style={{position:'fixed',zIndex:'40'}}><path fill="#04045e" fillOpacity="0.85" d="M0,64L1440,96L1440,0L0,0Z"></path></svg>    
            <svg className="diagonal_float" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110" ><path fill="#04045e" fillOpacity="1" d="M0,64L1440,96L1440,0L0,0Z"></path></svg>    
        </div>
    )
}

export default Bubble;