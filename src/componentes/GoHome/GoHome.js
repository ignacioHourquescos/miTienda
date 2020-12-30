import React, {useState,useEffect} from 'react';
import './GoHome.scss';
import galera from '../../images/galera.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilter, faSortAmountUpAlt} from '@fortawesome/free-solid-svg-icons';




const CallToActionIcons = () =>{
  //Variable & function from context

  
 
  return(
    <> 
 
              
      <div className="go_home">
        <Link  to={"/"}>
          <div> 
            <img classNmae="go_home_icon" src= {galera} />
          </div>
        </Link>
      </div>
            
      
    </>
  )
}

export default CallToActionIcons;


