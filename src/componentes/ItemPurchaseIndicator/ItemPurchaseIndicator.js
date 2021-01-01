import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './ItemPurchaseIndicator.scss';
import useAppContext from '../../context/UseAppContext';




const ItemPurchaseIndicator = ({article, onChange}) =>{
      const {cartArray,eliminateItem} = useAppContext();
      const [currentItemQuantity, setCurrentItemQuantity]=useState();


      function handleChange(){
        onChange(false);
      }

      useEffect(() => {
        let aux=0;
        aux = cartArray.find(element =>element.id===article.id);
        if (!aux) setCurrentItemQuantity(0);
        else setCurrentItemQuantity(aux.quantity)
      }, [cartArray, article.id]);
    
     
  
     return(
      <div className="confirm_purchase"> 

            <button className="eliminate_item_home" onClick={() =>{eliminateItem(article); handleChange()}}>x</button>
            
            <div className="units_purchased"> 
              {currentItemQuantity}
            </div>
            
            <Link className="modify_purchase" to={`/product/${article.id}`} >
                 Mas Detalle       
            </Link>    
                      
      </div> 
      )
  }
  
  export default ItemPurchaseIndicator;
  
  
  
  
  
  