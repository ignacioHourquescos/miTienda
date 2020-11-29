import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import './Item.css';



const Item = ({article}) =>{

    const [units, setUnits]=useState(0);
    

    const optionSelected = (value) =>{
        console.log("apreto el mouse");
        setUnits(value);
    }


   return(
        <div className="product_grid">
            <div className="card_holder">
                <div className="image_container">
                    <Link to={`/product/${article.id}`} >
                        <img className="image" src={article.img}></img>
               
                    </Link>
                </div>

                <Link to={`/product/${article.id}`} >
                    <h2>{article.name}</h2>
                </Link>
                    
                <div className="numeric_info">
                    <h3> ${article.price}</h3>
                    <h3>Disponible: {article.stock}</h3>
                    </div> 
                
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
