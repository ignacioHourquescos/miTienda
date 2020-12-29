
import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/Item';


import MyLoader from "../ContentLoader/ContentLoader"



const ItemList = ({products,loading}) =>{

 
    

    return (
        <> {
products.map(article => <Item key={article.id} article={article} loadingArticle={loading}/>)
        }
        </>
    );
}

export default ItemList;
