
import React  from 'react';
import './ItemList.css';
import Item from '../Item/Item'



const ItemList = ({products}) =>{

    return (
        products.map(article => <Item key={article.id} id={article.id} name={article.name} price={article.price} stock={article.stock}/>)
        );
    
}

export default ItemList;
