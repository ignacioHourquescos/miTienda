import React from 'react';
import { Link } from 'react-router-dom';



const  NotFoundPage = () =>{
    return(
        <div style={{textAlign:"center",fontFamily:"'Suez One', serif",fontSize:"2rem"}}>
      
            <p >Ups! No tenemos ningun producto de esas características!</p>
            <Link to="/">Volver al inicio </Link> 
            
            
          </div>
    )
}
export default NotFoundPage;