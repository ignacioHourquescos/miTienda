import React, {useEffect, useState} from 'react';
import {getSingleProductFromDatabase} from '../../lib/database';
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
        getSingleProductFromDatabase(id)
            .then((result) => {setProduct(result);}) 
            .then(()       =>  setLoading(false)) 
    }, []);


        
   

    return (<div>{loading ? <h1>Loading...</h1> : <ItemDetail product={product}/>}</div>)
      
    
}

export default ItemDetailContainer
