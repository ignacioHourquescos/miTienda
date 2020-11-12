import React from 'react';
import './Home.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
// import ProductGrid from '../ProductGrid/ProductGrid'; desarollo fuera de entregables

const getProducts = () => {
    const serverResponse = new Promise(resolve => {
        setTimeout(() => {const product = [   
            {name:"Zapatillas", price:2700, size:'42'},
            {name:"Camiseta de Racing", price:13299, size:'42'},
            {name:"Reloj", price:4002, size:'42'}];
            resolve(product)}, 3000)
        });
    serverResponse.then(response => {
        console.log(response);
        return response;
    })
}


const Home= ({greeting, getproducts}) =>{
    const showCounterInConsole = (counter) => { console.log(counter); }
    return(<>
        <h3 className="greeting">{greeting}</h3>
        <ItemCount initial={5} min={0} max={10}  onAdd={showCounterInConsole} />
        <ItemList products={getProducts()}/>
        {/* <ProductGrid/> entrega propia */}
        </>
    )
}

export default Home;