
import React, {useState}  from 'react';
import './ItemList.css';
import Item from '../Item/Item'



const ItemList = ({products}) =>{
    console.log(products);

    // return (productsreceived.map(article => <Item article={article}/>));
    return(<Item></Item>)
}

export default ItemList;
