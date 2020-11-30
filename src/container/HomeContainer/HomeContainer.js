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
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110" style={{position:'fixed',zIndex:'100'}}><path fill="#0019ff" fillOpacity="1" d="M0,64L1440,96L1440,0L0,0Z"></path></svg>    
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 110" style={{zIndex:'10'}}><path fill="#0019ff" fillOpacity="1" d="M0,64L1440,96L1440,0L0,0Z"></path></svg>    
            </div>
            <div className="home_container">
                <ItemList className="list" products={products}/>
            </div>
        </>
    )
}

export default Home;

