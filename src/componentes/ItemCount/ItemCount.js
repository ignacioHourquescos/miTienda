
import React, {useState} from 'react';
import './ItemCount.css';


const ItemCount = ({initial, min, max, onAdd}) =>{
    const [ItemCount, setItemCount]=useState(initial);



    //funciones de barra_ItemCount
    const restarUnidad = () => { if (ItemCount > min) setItemCount(ItemCount - 1); }
    const sumarUnidad =  () => { if (ItemCount < max) setItemCount(ItemCount + 1); }

    //funcion de agerga al carrito. A desarollar
    

    return<div>
        <div className="barra_ItemCount">
            <button onClick={()=>{restarUnidad()}}>-</button>
            <span>{ItemCount}</span>
            <button onClick={()=>{sumarUnidad()}}>+</button>
        </div>

        <div className="agregar_carrito"> 
            <button onClick={()=>{onAdd(ItemCount)}}>Agregar al Carrito</button>
        </div>
    </div>
}

export default ItemCount;
