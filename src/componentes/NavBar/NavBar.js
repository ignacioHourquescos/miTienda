import React from 'react';
// import Bubble from '../Bubble/Bubble';
import './NavBar.css';
import {Link} from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
//App Context
import useAppContext from '../../context/UseAppContext';



const NavBar = () =>{

    //Variable & function from context
    const {cartArray, handleCartArray} = useAppContext();


    return(
      <>   <Link to={`/cart/`}>
        <CartIcon/>
        <div className="sidebar">

        <div className="menu">
          <div className="counter_cart_icon">{cartArray.length}</div>
          <FontAwesomeIcon style={{color:'white'}} icon={faShoppingCart } />
        
        </div>
        {/* <div className="list">
          <Bubble nombreCategoria="Bebidas" icono="faCoffee"/>
          <Bubble nombreCategoria="Vinos"/>
          <Bubble nombreCategoria="Alacena"/>
          <Bubble nombreCategoria="Hogar"/>
          <Bubble nombreCategoria="Gourmet"/>
        </div> */}
      </div>
      </Link>
      </>
    )
}

export default NavBar;