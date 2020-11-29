
import React, {useState, useEffect} from 'react';
import './ItemCount.css';


const ItemCount = ({initial, min, max, onAdd}) =>{
    const [ItemCount, setItemCount]=useState(initial);

    //funciones de barra_ItemCount
   
        const restarUnidad = (ItemCount) => {
             if (ItemCount > min) {
             setItemCount(ItemCount - 1); 
             onAdd(ItemCount-1);
            }
        }

        const sumarUnidad =  (ItemCount) => { 
            if (ItemCount < max) {
                setItemCount(ItemCount + 1);
                onAdd(ItemCount+1);
            }
        
        }
        
        useEffect((t) => {
            setItemCount(ItemCount);

        }, []);
    
    return(
        <div>
            <div className="barra_ItemCount">
                <button onClick={()=>{restarUnidad(ItemCount)}}>-</button>
               
                <span>{ItemCount}</span>
               
                <button onClick={()=>{sumarUnidad(ItemCount)}}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;
