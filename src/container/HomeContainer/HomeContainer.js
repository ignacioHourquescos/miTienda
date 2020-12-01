import React, {useEffect, useState} from 'react';

import './HomeContainer.css';

import ItemList from '../../componentes/ItemList/ItemList';
import {getProductsFromDatabase} from '../../lib/database';




const Home= () =>{
    
    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        getProductsFromDatabase().then((result) => {
            setProducts(result);
        })   
    }, []);
    

    return(<>

            <div className="home_container">
                <ItemList className="list" products={products}/>
            </div>
        </>
    )
}

export default Home;

