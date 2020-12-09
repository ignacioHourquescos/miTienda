import React from 'react';
import './ItemImage.css';



const ItemImage = ({product}) => {

    return (
        <>
         <div className="imagen">
                <img className="imagen" src={product.img} alt={product.img}/>
            </div>
        </>
    )
}

export default ItemImage



