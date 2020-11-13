
import React  from 'react';
import './ItemList.css';
import Item from '../Item/Item'



const ItemList = ({products}) =>{
    console.log(products);
    // myFunction(productsReceived);
    // function myFunction(elemento) {
    //     setTimeout( console.log("hole"), 3500);
    //   }
    //   function myFunction() {
    //     setTimeout(function(){ alert("Hello"); }, 3000);
    //   }
    //   myFunction();  
 

    // return (productsReceived.map(article => <Item article={article}/>));
    return(<Item></Item>)
}

export default ItemList;
