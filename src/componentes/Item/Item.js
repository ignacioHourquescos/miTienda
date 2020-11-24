import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import './Item.css';



const Item = ({id, name, price, stock}) =>{

    const [units, setUnits]=useState(0);
    

    const optionSelected = (value) =>{
        console.log("apreto el mouse");
        setUnits(value);
    }


   return(
        <div className="product_grid">
            <div className="card_holder">

                <Link to={`/product/${id}`} >
                    <h2>{name}</h2>
                    <h3>Precio: ${price}</h3>
                    <h3>Stock: {stock}</h3>
                </Link>
                
                <div>
                    <ItemCount initial={0} min={0} max={10}  onAdd={optionSelected}/>
                    <div className="add_to_cart_button primary"> 
                        <button>Agregar </button>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Item;
