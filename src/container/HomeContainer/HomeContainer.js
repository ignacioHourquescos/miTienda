import React, {useEffect, useState} from 'react';

import './HomeContainer.css';

import ItemList from '../../componentes/ItemList/ItemList';
import getProductsFromDatabase from '../../lib/database';




const Home= () =>{
    
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        getProductsFromDatabase()
            .then(() => {console.log("hola");})
            .then((result) => {setProducts(result);})   
    }, []);
    
    
    return(<>
        <ItemList  products={products}/>
       
        </>
    )
}

export default Home;

