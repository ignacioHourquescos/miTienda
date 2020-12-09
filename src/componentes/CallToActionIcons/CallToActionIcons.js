import React  from 'react';
import './CallToActionIcons.scss';
import {Link} from 'react-router-dom';



const CallToActionIcons = () =>{
    //Variable & function from context


    return(<>  
       <Link to={`/cart/`}>
        <div className="sidebar2">
        <div  className="cta1"> 

        </div>  
        <div className="cta2"></div>
        <div className="cta3"></div>
      </div>

      </Link>
      
      </>
    )
}

export default CallToActionIcons;


