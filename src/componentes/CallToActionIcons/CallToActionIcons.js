import React, {useState,useEffect} from 'react';
import './CallToActionIcons.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getCategories} from  '../../lib/database';
import { faHome, faFilter, faSortAmountUpAlt} from '@fortawesome/free-solid-svg-icons';




const CallToActionIcons = () =>{
  //Variable & function from context
  const [showCategories, setShowCategories]=useState(false);
  const [products, setProducts]=useState(false);

  
  useEffect(() => {
    getCategories().then((result) => {
        setProducts(result);
    })   
  }, []);
   
  return(
    <> 
      {showCategories? 
          <div className="category_list_container">
            <div className="category_list" onClick={()=>{setShowCategories(false)}}>
              {products.map(category => 
                 <div className="category_specific_container">
                  <Link className="link_to_category" to={"/"+category}>{category}</Link>
                </div>
              )}
            </div>
          </div>
        : ""}
              
 
            
      <div className="call_to_action">
        <div className="cta3" onClick={() => setShowCategories(true)}><FontAwesomeIcon style={{color:'white', height:'100%'}}  icon={faFilter} /></div>
      </div>              
           
    </>
  )
}

export default CallToActionIcons;


