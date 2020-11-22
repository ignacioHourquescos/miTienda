import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';





const ItemDetail = ({product}) => {


    return (
        <div className="container">
            <div className="imagen">
                <img src="https://www.vinetur.com/imagenes/2019/agosto/5/vino_termometro.jpg"/>
            </div>
            <div className="detalle">
                <h1>Codigo: {product.id}</h1>
                <h1>Nombre: {product.name}</h1>
                <h1>Precio: ${product.price}</h1>
                <h1>Descripcion: {product.desc}</h1>
                <h1>Prsentacion: {product.pres}</h1>
                <h1>Stock: {product.stock}</h1> 
            <div className="shopping_cart">   
                <ItemCount initial={5} min={0} max={10}  onAdd=""/>
                <div className="add_to_cart_button primary"> 
                    <button onClick={()=>{console.log(product.desc)}}>Agregar al Carrito</button>
                </div>
            </div> 
            </div>
            
            
            
        </div>
    )
}

export default ItemDetail
