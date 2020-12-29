import React from 'react';
import { Link } from 'react-router-dom';



const  NotFoundPage = () =>{
    return(
        <div>
      
            <p style={{textAlign:"center"}}>Ups! No tenemos ningun producto de esas características!
            <Link to="/">Volver al inicio </Link> 
            </p>
            
          </div>
    )
}
export default NotFoundPage;