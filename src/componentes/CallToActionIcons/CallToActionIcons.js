import React  from 'react';
import './CallToActionIcons.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilter, faSortAmountUpAlt} from '@fortawesome/free-solid-svg-icons';



const CallToActionIcons = () =>{
    //Variable & function from context


    return(
    <>  
      <Link to={`/cart/`}>
      </Link>

        <div className="go_home">
          <div className="cta0">
          <FontAwesomeIcon style={{color:'white', height:'100%'}}  icon={faHome } />
          </div>
        </div>
        <div className="call_to_action">
          <div  className="cta1"> <FontAwesomeIcon style={{color:'white', height:'100%'}}  icon={faFilter} />
          </div>  
          <div className="cta2"><FontAwesomeIcon style={{color:'white', height:'100%'}}  icon={faSortAmountUpAlt } /></div>
          <div className="cta3"><FontAwesomeIcon style={{color:'white', height:'100%'}}  icon={faHome} /></div>
        </div>

      
      
      </>
    )
}

export default CallToActionIcons;


