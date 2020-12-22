import React, {useEffect, useState} from 'react';
import './CartIcon.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';


//App Context
import useAppContext from '../../context/UseAppContext';




const CartIcon = () =>{

    //Variable & function from context
    const {cartArray, countIndividualCartItems, getTotalCartValue} = useAppContext();
    const [cartItems, setCartItems]=useState(0);

    useEffect(()=>{
      setCartItems(countIndividualCartItems(cartArray))
    },[cartArray])


    return(
    <>  
       <Link to={`/cart/`}>
        <div className="sidebar">
          <div className="menu">
          
            <div className="counter_cart_icon">{cartItems}</div>
            <FontAwesomeIcon style={{color:'white'}} icon={faShoppingCart } />
            <div className="total_value_icon">{getTotalCartValue===0?" ":"$"+getTotalCartValue}</div>
          
          </div>
        </div>
      </Link>
      
    </>
    )
}

export default CartIcon;