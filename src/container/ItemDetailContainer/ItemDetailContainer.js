import React, {useEffect, useState} from 'react';
import getSingleProductFromDatabase from '../../lib/databaseSingleProduct';
import './ItemDetailContainer.css';
import ItemDetail from '../../componentes/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const {id}=useParams();
    
    console.log("este es el numero de id: " +id);
    useEffect(() => {
        setLoading(true);
        getSingleProductFromDatabase()
            .then((result) => {return (result)})
            .then((result) => {setProduct(result);}) 
            .then(() =>setLoading(false));  
    }, []);

    const singleArticle =  product.map(article => 
        <ItemDetail id={article.id} name={article.name} price={article.price} desc={article.desc} pres={article.pres} stock={article.stock}/>
    );

    return (<div>{loading ? <h1>Loading...</h1> : <div>{singleArticle}</div>}</div>
   )
      
    
}

export default ItemDetailContainer
