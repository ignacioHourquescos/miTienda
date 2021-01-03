import React, { useState } from 'react';
import './ItemDetail.scss';
import ItemDescription from '../ItemDescription/ItemDescription';
import AddToCart from '../AddToCart/AddToCart';

const ItemDetail = ({ product }) => {

    return (

        <div className="container">
            
            <div className="item_detail_left">
                <div className="image_detail_container">
                    <img className="image_detail" src={product.img} alt={product.img} />
                </div>
            </div>

            <div className="item_detail_right">
                <ItemDescription product={product} />
                <div className="">
                    <AddToCart initial={0} min={0} max={1000} product={product} />
                </div>
            </div>

        </div>

    )
}

export default ItemDetail




