import React, {useEffect, useState} from 'react';
import './Home.css';

import ItemList from '../ItemList/ItemList';
import getProductsFromDatabase from '../../lib/database';
// import ProductGrid from '../ProductGrid/ProductGrid'; desarollo fuera de entregables



//  const getProducts = () => {
//      const serverResponse = new Promise(resolve => {
//          setTimeout(() => {const product = [   
//              {name:"Zapatillas", price:2700, size:'42'},
//              {name:"Camiseta de Racing", price:13299, size:'42'},
//              {name:"Reloj", price:4002, size:'42'}];
//              resolve(product)}, 3000)
//          });
//      serverResponse.then(response => {
//         console.log(response); 
//         return response;
         
//      })
//  }




const Home= ({greeting}) =>{
    
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        getProductsFromDatabase()
            .then((result) => {return (result);})
            .then((result) => {setProducts(result);})   
    }, []);
    
    

    // const showCounterInConsole = (counter) => { console.log(counter); } Entrega TP3
    return(<>
        <h3 className="greeting">{greeting}</h3>
        {/* <ItemCount initial={5} min={0} max={10}  onAdd={showCounterInConsole} /> */} 
        <ItemList  products={products}/>
        </>
    )
}

export default Home;