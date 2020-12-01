import React  from 'react';
//Components & CSS
import Cart from '../../componentes/Cart/Cart'
import './CartContainer.scss';
//AppContext
import useAppContext from '../../context/UseAppContext';

const AddToCart = () => {

    const {cartArray} = useAppContext();

    return (
        <div className="cart_container"> 
            <div className="cart_actions">
                <h1>Tu Carrito:</h1>
                <h1>$$$$</h1>
                <button>pedir</button>
            </div>
            <Cart/>  
        </div>      

    )
}

export default AddToCart

