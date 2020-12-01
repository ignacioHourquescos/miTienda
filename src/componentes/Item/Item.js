import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import './Item.css';

import AddToCart from '../AddToCart/AddToCart';



const Item = ({article}) =>{

    const [units, setUnits]=useState();
    

    const optionSelected = (value) =>{
        console.log("apreto el mouse");
        setUnits(value);
    }


   return(
        <div className="product_grid">
            <div className="card_holder">
                <div className="image_container">
                    <h3 className="price"> ${article.price}</h3>
                    <Link to={`/product/${article.id}`} >
                        <img className="image" src={article.img}></img>
                        
                    </Link>
                </div>

                <div className="data_container">
                    <Link className="link_to_product" to={`/product/${article.id}`} >
                        <h2>{article.name}</h2>
                    </Link>
                        
                    {/* <div className="numeric_info">
                        <h3>Disponible: {article.stock}</h3>
                    </div>  */}

                    <div className="add_to_cart">
                         <ItemCount initial={0} min={0} max={10}  onAdd={optionSelected}/> 
                        <AddToCart className ="button_item" product={article} units={units}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;
