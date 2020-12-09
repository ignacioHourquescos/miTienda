import React  from 'react';
import useAppContext from '../../context/UseAppContext';
import './CartList.scss'


const CartList = () => {

    //Variable & function from context
    const {cartArray} = useAppContext();

    return (
        <div className="cart_list"> 
                <div className="cart_list_row">
                    <h4>Producto</h4>
                    <h4>Cantidad</h4>
                    <h4>Producto</h4>
                    <h4>Precio</h4>
                    <h4>Sub-Total</h4>
                </div>

            {cartArray.map((element) =>(
                <div className="cart_list_row">
                    <div><img  src={element.img} alt={element.img}></img></div>
                    <h4>{element.quantity}</h4>
                    <h4>{element.name}</h4>
                    <h4>${element.price}</h4>
                    <h4>${element.price*element.quantity}</h4>
               
                </div>
            ))}
        </div>
    )
}

export default CartList;
