import React from 'react';
//Components & CSS
//AppContext
import useAppContext from '../../context/UseAppContext';
import swal from 'sweetalert'
import './AddToCart.scss'


const AddToCart = ({product, units}) => {

    //Variable & function from context
    const {handleCartArray} = useAppContext();


    return (
        <div> 
            <button className="addtocart_button" onClick={() =>{(
                units===0 || isNaN(units))
                ? swal("Debe seleccionar una cantidad valida!") 
                : handleCartArray(units, product)}}>Agregar {units } unidad </button>
        </div>      
    )
}

export default AddToCart

