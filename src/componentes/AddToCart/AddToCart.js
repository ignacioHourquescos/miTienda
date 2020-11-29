import React from 'react';
//Components & CSS
//AppContext
import useAppContext from '../../context/UseAppContext';


const AddToCart = ({product, units}) => {

    //Variable & function from context
    const {cartArray, handleCartArray} = useAppContext();

    const addToCart = (unitsSelected, productSelected) =>{
         handleCartArray(unitsSelected, productSelected)
    }


    return (
        <div> 
            <button onClick={() =>addToCart(units, product)}>Agregar {units } unidad </button>
        </div>      
    )
}

export default AddToCart

