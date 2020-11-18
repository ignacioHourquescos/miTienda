import React, {useEffect, useState } from 'react';
import getSingleProductFromDatabase from '../../lib/databaseSingleProduct';
import './ItemDetailContainer.css';
// import ItemCount from '../../componentes/ItemCount/ItemCount';
import ItemDetail from '../../componentes/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);


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
