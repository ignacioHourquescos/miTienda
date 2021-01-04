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

        if ((units === 0 || isNaN(units) || itemCount === 0))
            swal("Debe seleccionar una cantidad valida!")
        else if (itemCount > 0) {
            handleCartArray(units, product);
            swal("Su Carrito fue actualizado: \nAgregó " + units + " unidades de " + product.name)
        } else {
            handleCartArray(units, product);
            swal("Su Carrito fue actualizado: \nQuitó: " + unitsModal + " de " + product.name)
        }
        setItemCount(0);
    }

    useEffect((t) => {
        setItemCount(itemCount);
        setCurrentItemQuantity(ItemQuantity(product));
        setUnits(itemCount)
    }, [itemCount, cartArray,ItemQuantity,product]);


    return (
        <>

            <div className="add_to_cart_ItemCount">
                
                <button onClick={() => { restarUnidad(itemCount) }}>-</button>
                <span>
                    {currentItemQuantity === 0
                        ? itemCount
                        : currentItemQuantity + itemCount}
                </span>
                <button onClick={() => { sumarUnidad(itemCount) }}>+</button>

            </div>

            <div>

                <button className="add_to_cart_button" onClick={() => { addToCart() }}>
                    {currentItemQuantity > 0 ? "Modificar" : "Agregar"}
                </button>
                <button className="add_to_cart_button_mobile" onClick={() => { addToCart() }}>
                    {currentItemQuantity > 0 ? "Modificar" : "Agregar"}
                </button>
                
            </div>
        </>
    )
}

export default AddToCart


