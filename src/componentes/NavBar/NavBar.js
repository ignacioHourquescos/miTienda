import React from 'react';
// import Bubble from '../Bubble/Bubble';
import './NavBar.css';
import {Link} from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';





const NavBar = () =>{
    // const [showMenu, setShowMenu]=useState(false);

    // const restarUnidad = ItemCount => {
    //   alert(ItemCount);  
    //   document.getElementsByClassName("list")[0].style.("display:none");
    // }




    return(
      <>   <Link to={`/cart/`}>
        <CartIcon/>
        <div className="sidebar">
        <div className="menu">
     
        <FontAwesomeIcon icon={faShoppingCart } />
        
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