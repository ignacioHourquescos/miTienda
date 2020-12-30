import React from 'react';
import './ItemDescription.scss';



const ItemDescription = ({product}) => {

    return (
        <>
            <div className="detail">
            
                <div className="flexrowI---I">
                    <h2 className="item_detail_name">{product.name}</h2>
                    <h2 className="item_detail_id">{product.id}</h2>         
                </div>

                <div className="item_description_2">
                    <h2 className="item_detail_price">Precio: ${product.price}</h2>
                    <h3 className="item_detail_desc">Descripcion: {product.desc}</h3>
                </div>
                
                <div className="flexrowI---I">
                    <h2 className="item_detail_pres">Prsentacion: {product.pres}</h2>
                </div>

                <div className="shopping_cart">   </div> 
            </div>
        </>
    )
}

export default ItemDescription



