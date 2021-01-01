import React, { useState, useEffect } from 'react';
import useAppContext from '../../context/UseAppContext';
import swal from 'sweetalert'
import './AddToCart.scss'


const AddToCart = ({ product, initial, min, max }) => {

    const { handleCartArray, cartArray, ItemQuantity } = useAppContext();
    const [itemCount, setItemCount] = useState(0);
    const [currentItemQuantity, setCurrentItemQuantity] = useState();
    const [units, setUnits] = useState();

    const restarUnidad = (itemCount) => {
        if (currentItemQuantity + itemCount > 0) setItemCount(itemCount - 1)
    }

    const sumarUnidad = (itemCount) => {
        if (itemCount < max) setItemCount(itemCount + 1);
    }

    const addToCart = () => {
        let unitsModal = units * -1;
        (units === 0 || isNaN(units))
            ? swal("Debe seleccionar una cantidad valida!")
            : handleCartArray(units, product);
        (itemCount > 0)
            ? swal("Su Carrito fue actualizado: \nAgregó " + units + " unidades de " + product.name)
            : swal("Su Carrito fue actualizado: \nQuitó: " + unitsModal + " de " + product.name)
        setItemCount(0);
    }

    useEffect((t) => {
        setItemCount(itemCount);
        setCurrentItemQuantity(ItemQuantity(product));
        setUnits(itemCount)
    }, [itemCount, cartArray]);


    return (
        <>

            <div className="barra_ItemCount">
                <button onClick={() => { restarUnidad(itemCount) }}>-</button>
                <span>
                    {currentItemQuantity === 0
                    ? itemCount
                    : currentItemQuantity + itemCount}
                </span>
                <button onClick={() => { sumarUnidad(itemCount) }}>+</button>
            </div>

            <div>
                <button className="addtocart_button" onClick={() => { addToCart() }}>
                    {currentItemQuantity > 0 ? "Modificar" : "Agregar"}
                </button>
            </div>
        </>
    )
}

export default AddToCart

   
