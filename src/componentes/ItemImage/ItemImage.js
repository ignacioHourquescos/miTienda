import React from 'react';
import './ItemImage.scss';



const ItemImage = ({product}) => {

    return (
        <>
         <div className="image_detail_container">
                <img className="image_detail" src={product.img} alt={product.img}/>
            </div>
        </>
    )
}

export default ItemImage



