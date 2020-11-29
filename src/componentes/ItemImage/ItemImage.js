import React from 'react';
import './ItemImage.css';



const ItemImage = ({product}) => {

    return (
        <>
         <div >
                <img className="imagen" src={product.img}/>
            </div>
        </>
    )
}

export default ItemImage



