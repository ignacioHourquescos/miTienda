import React  from 'react';
import useAppContext from '../../context/UseAppContext';

const Cart = () => {

    //Variable & function from context
    const {cartArray, handleCartArray} = useAppContext();
   

    return (
        <div>
         {cartArray[0].name}
        </div>
    )
}

export default Cart;

