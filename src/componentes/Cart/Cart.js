import React  from 'react';
import useAppContext from '../../context/UseAppContext';
import CartList from '../CartList/CartList';
import './Cart.scss';

const Cart = () => {

    //Variable & function from context
    const {cartArray} = useAppContext();
   

    return (
        <>
            {cartArray.length==0
            ? <h1>No tiene prodcutos aun agregados</h1>
            : <CartList/>}
        </>
    )
}

export default Cart;
