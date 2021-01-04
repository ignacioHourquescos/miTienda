
import React, { useState, useEffect } from 'react';
import './ItemCount.scss';
import useAppContext from '../../context/UseAppContext';


const ItemCount = ({ initial, min, max, onAdd, product }) => {
    const [ItemCount, setItemCount] = useState(initial);
    const { handleCartArray, cartArray, ItemQuantity } = useAppContext();
    const [currentItemQuantity, setCurrentItemQuantity] = useState();

    //funciones de barra_ItemCount

    const restarUnidad = (ItemCount) => {
        if (ItemCount > min) {
            setItemCount(ItemCount - 1);
            onAdd(ItemCount - 1);
        }
    }

    const sumarUnidad = (ItemCount) => {
        if (ItemCount < max) {
            setItemCount(ItemCount + 1);
            onAdd(ItemCount + 1);
        }
    }

    useEffect((t) => {
        setItemCount(ItemCount);
        setCurrentItemQuantity(ItemQuantity(product));
    }, [ItemCount, cartArray, ItemQuantity, product]);




    return (
        <div>

            <div className="barra_ItemCount">
                <button onClick={() => { restarUnidad(ItemCount); handleCartArray(-1, product); }}>-</button>

                <span>{currentItemQuantity}</span>

                <button onClick={() => { sumarUnidad(ItemCount); handleCartArray(1, product) }}>+</button>
            </div>
            
        </div>
    )
}

export default ItemCount;
