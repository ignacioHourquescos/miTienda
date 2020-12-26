import React, {useEffect, useState} from 'react';
import ContentLoader from "react-content-loader"

import '../HomeContainer/HomeContainer.css';

import ItemList from '../../componentes/ItemList/ItemList';
import {getProductsByCategory} from '../../lib/database';
import {useParams} from 'react-router-dom';



const Home= () =>{
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category}=useParams();
    
    useEffect(() => {
        setLoading(true);
        getProductsByCategory(category)
            .then((result) => {setProducts(result);}) 
            .then(()       =>  setLoading(false)) 
    }, [category]);



    return(<>

            <div className="home_container">
                  {loading ?   <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="20" cy="20" r="20" />
  </ContentLoader> : <ItemList className="list" products={products}/>}
            </div>
        </>
    )
}

export default Home;

