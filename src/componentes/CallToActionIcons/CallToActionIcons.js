import React from 'react';
import './CallToActionIcons.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';


//App Context
import useAppContext from '../../context/UseAppContext';


const CallToActionIcons = () =>{
    //Variable & function from context
    const {cartArray, handleCartArray} = useAppContext();


    return(<>  
       <Link to={`/cart/`}>
        <div className="sidebar2">
        <div className="cta1"></div>
        <div className="cta2"></div>
        <div className="cta3"></div>
      </div>
      </Link>
      </>
    )
}

export default CallToActionIcons;