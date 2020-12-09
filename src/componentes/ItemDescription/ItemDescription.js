import React from 'react';
import './ItemDescription.css';



const ItemDescription = ({product}) => {

    return (
        <>
         
        
            <div className="detalle">
                <h1>Codigo: {product.id}</h1>
                <h1>Nombre: {product.name}</h1>
                <h1>Precio: ${product.price}</h1>
                <h1>Descripcion: {product.desc}</h1>
                <h1>Prsentacion: {product.pres}</h1>
                <h1>Stock: {product.stock}</h1> 
                <div className="shopping_cart">   </div> 
            </div>
        </>
    )
}

export default ItemDescription



