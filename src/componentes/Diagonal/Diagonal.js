import React from 'react';


const Bubble= ({nombreCategoria, icono}) =>{
    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110" style={{position:'fixed',zIndex:'100'}}><path fill="#1e1e1e" fillOpacity="0.85" d="M0,64L1440,96L1440,0L0,0Z"></path></svg>    
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110" style={{zIndex:'10'}}><path fill="#1e1e1e" fillOpacity="1" d="M0,64L1440,96L1440,0L0,0Z"></path></svg>    
        </div>
    )
}

export default Bubble;