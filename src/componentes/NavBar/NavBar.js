import React from 'react';
import Bubble from '../Bubble/Bubble';
import './NavBar.css';
import CartIcon from '../CartIcon/CartIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';





const NavBar = () =>{
    // const [showMenu, setShowMenu]=useState(false);

    // const restarUnidad = ItemCount => {
    //   alert(ItemCount);  
    //   document.getElementsByClassName("list")[0].style.("display:none");
    // }




    return(
      <>
        <CartIcon/>
        <div className="sidebar">
        <div className="menu">
        <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div className="list">
          <Bubble nombreCategoria="Bebidas" icono="faCoffee"/>
          <Bubble nombreCategoria="Vinos"/>
          <Bubble nombreCategoria="Alacena"/>
          <Bubble nombreCategoria="Hogar"/>
          <Bubble nombreCategoria="Gourmet"/>
        </div>
      </div>
      </>
    )
}

export default NavBar;