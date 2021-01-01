import React, {useState} from 'react';
//Components & CSS
import Cart from '../../componentes/Cart/Cart'
import './CartContainer.scss';
import ClientData from '../../componentes/ClientData/ClientData';



//AppContext
import useAppContext from '../../context/UseAppContext';

const AddToCart = () => {

    const {getTotalCartValue,cartArray} = useAppContext();
    const [showCheckOut, setShowCheckOut] = useState(false);

    const handleShowCheckOut = () => {
        setShowCheckOut(true);
    }

    return (
        <div className="cart_container">
            <Cart/>
            <ClientData/>
            {/* <div className="cart_actions">
                <h1>Tu Carrito:</h1>
                <h2>${getTotalCartValue}</h2>
                <button onClick={handleShowCheckOut} >Iniciar Compra</button>            
            </div> */}
            
        </div>      

    )
}

export default AddToCart

