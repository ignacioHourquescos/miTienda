
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';



const Item = ({id, name, price, stock}) =>{

    return(
        <div className="product_grid">
            <div className="card_holder">
                <h2>{name}</h2>
                <h3>Precio: ${price}</h3>
                <h3>Stock: {stock}</h3>
                <ItemCount initial={5} min={0} max={10}  onAdd=""/>
            </div>
        </div>
    )
}

export default Item;
