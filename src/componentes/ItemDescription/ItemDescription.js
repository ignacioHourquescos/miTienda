import React from 'react';
import './ItemDescription.scss';



const ItemDescription = ({product}) => {

    return (
        <>
         
        
            <div className="detail">
                <div className="flexrowI---I">
                    <h1 className="item_detail_name">{product.name}</h1>
                    <h2 className="item_detail_id">Codigo: {product.id}</h2>         
                </div>

                <h1 className="item_detail_price">Precio: ${product.price}</h1>
                <h1 className="item_detail_desc">Descripcion: {product.desc}</h1>

                <div className="flexrowI---I">
                    <h1 className="item_detail_pres">Prsentacion: {product.pres}</h1>
                    <h1 className="item_detail_stock">Stock: {product.stock}</h1> 
                </div>

                <div className="shopping_cart">   </div> 
            </div>
        </>
    )
}

export default ItemDescription



