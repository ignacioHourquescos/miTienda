import React  from 'react';
//Components & CSS
import Cart from '../../componentes/Cart/Cart'
import './CartContainer.scss';
import ClientData from '../../componentes/ClientData/ClientData';
import {getFirestore} from '../../firebase'
import swal from 'sweetalert'

//AppContext
import useAppContext from '../../context/UseAppContext';

const AddToCart = () => {

    const {getTotalCartValue,cartArray} = useAppContext();
    


    return (
        <div className="cart_container"> 
            <div className="cart_actions">
                <h1>Tu Carrito:</h1>
                <h1>${getTotalCartValue}</h1>
                <ClientData/>                  
            </div>
            <Cart/>  
        </div>      

    )
}

export default AddToCart

