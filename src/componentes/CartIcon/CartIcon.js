import React from 'react';
import './CartIcon.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';


//App Context
import useAppContext from '../../context/UseAppContext';

const countIndividualCartItems = (elemento) => {
  var counter = 0;
  for (var i = 0; i < elemento.length; i++) {
    counter = counter + elemento[i].quantity;
  }
  return counter;
};


const CartIcon = () =>{

    //Variable & function from context
    const {cartArray, handleCartArray} = useAppContext();


    return(<>  
       <Link to={`/cart/`}>

        <div className="sidebar">

        <div className="menu">
          <div className="counter_cart_icon">{countIndividualCartItems(cartArray)}</div>
          <FontAwesomeIcon style={{color:'white'}} icon={faShoppingCart } />
        
        </div>
      </div>
      </Link>
      </>
    )
}

export default CartIcon;