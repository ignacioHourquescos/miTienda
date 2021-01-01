import React, {useEffect, useState} from 'react';

import './HomeContainer.scss';

import ItemList from '../../componentes/ItemList/ItemList';
import {getProductsFromDatabase} from '../../lib/database';
import MyLoader from "../../componentes/ContentLoader/ContentLoader"



const Home= () =>{
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading]=useState(true);
    
    useEffect(() => {

        getProductsFromDatabase()        
        .then((result) => {setProducts(result);}) 
        .then(()       =>  setLoading(false)) 
    });
    

    return(<>

            <div className="home_container">
            
            {loading ? <MyLoader/> : <ItemList className="list" products={products} loading={loading}/>}
            </div>
        </>
    )
}

export default Home;

