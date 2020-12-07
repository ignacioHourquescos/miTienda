import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import './Item.css';

import AddToCart from '../AddToCart/AddToCart';
import useAppContext from '../../context/UseAppContext';



const Item = ({article}) =>{
    const {cartArray, handleCartArray} = useAppContext();

    const checkExistingCartProduct = (id) =>{
        const found = cartArray.find((element)=> element.id==id)
            console.log(found);
            return;
    }


    const addToCart = (unitsSelected, productSelected) =>{
        handleCartArray(unitsSelected, productSelected)

   }


    

    const [units, setUnits]=useState();

   return(
        <div className="product_grid">
            <div className="card_holder">
                
                <div className="image_container">
                    <h3 className="price"> ${article.price}</h3>
                    <Link to={`/product/${article.id}`} >
                        <img className="image" src={article.img}/>
                    </Link>
                </div>

                <div className="data_container">
                    <Link className="link_to_product" to={`/product/${article.id}`} >
                        <h2>{article.name}</h2>
                    </Link>
                        
                    <div className="add_to_cart">
                         {/* <ItemCount initial={5} min={0} max={10}  onAdd={optionSelected}/>  */}
                         <button onClick={() =>{addToCart(1, article)}}>COMPRAR</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Item;





