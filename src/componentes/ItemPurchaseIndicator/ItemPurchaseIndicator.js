import React from 'react';
import {Link} from 'react-router-dom';
import './ItemPurchaseIndicator.scss';
import useAppContext from '../../context/UseAppContext';




const ItemPurchaseIndicator = ({article}) =>{
      const {cartArray} = useAppContext();

      const find =(id)=>{
          var aux=0;
          aux = cartArray.find(element =>element.name===id);
          console.log(aux);
          return aux.quantity;
      }
  
     return(
      <div className="confirm_purchase"> 
            <div className="units_purchased"> 
            {find(article.name)}
            </div>

            <Link className="modify_purchase" to={`/product/${article.id}`} >
                 Modificar       
            </Link>  

            
      </div> 
      )
  }
  
  export default ItemPurchaseIndicator;
  
  
  
  
  
  