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
            <button onClick={() =>{isNaN(units)? alert("no tinene producsots") : addToCart(units, product)}}>Agregar {units } unidad </button>
        </div>      
    )
}

export default AddToCart

