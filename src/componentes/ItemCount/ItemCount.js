
import React, {useState, useEffect} from 'react';
import './ItemCount.css';


const ItemCount = ({initial, min, max, onAdd}) =>{
    const [ItemCount, setItemCount]=useState(initial);

    //funciones de barra_ItemCount
    const restarUnidad = () => { if (ItemCount > min) setItemCount(ItemCount - 1); }
    const sumarUnidad =  () => { if (ItemCount < max) setItemCount(ItemCount + 1); }

    //funcion de agerga al carrito. A desarollar
    

      
    return(
        <div>
            <div className="barra_ItemCount">
                <button onClick={()=>{restarUnidad();onAdd(ItemCount)}}>-</button>
               
                <span>{ItemCount}</span>
               
                <button onClick={()=>{sumarUnidad();onAdd(ItemCount)}}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;
