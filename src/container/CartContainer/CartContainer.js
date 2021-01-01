import React from 'react';
import './CartContainer.scss';
import Cart from '../../componentes/Cart/Cart'
import ClientData from '../../componentes/ClientData/ClientData';


const AddToCart = () => {

    return (
        <div className="cart_container">
            <Cart/>
            <ClientData/>
        </div>      
    )
}

export default AddToCart

