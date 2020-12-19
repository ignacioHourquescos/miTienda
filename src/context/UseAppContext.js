

import React, { createContext, useContext, useState } from 'react'
const AppContext = createContext()






//Product array cart
const useAppContext = () => useContext(AppContext)

// cart length
const countIndividualCartItems = (elemento) => {
    var counter = 0;
    for (var i = 0; i < elemento.length; i++) {counter = counter + elemento[i].quantity;}
    return counter;
};





export const AppProvider = ({ children}) => {

    const [cartArray, setCartArray] = useState([]);

    //Add to Cart Function. 
    const handleCartArray = (units, newItem) => { 

        const existing = cartArray.find((article)=>article.id=== newItem.id);
        if (existing) {
            console.log("Articulo existente en el carrito")
            console.log(newItem);
            existing.quantity = existing.quantity +units;
            setCartArray([...cartArray]);

        }else{
            console.log("Articulo nuevo en el carrito")
            console.log(newItem);
            setCartArray([...cartArray, {"id":newItem.id,"quantity":units,"name" :newItem.name,"price":newItem.price, "img":newItem.img}]);
        }     
    }


    //Emliniate existing item on CartArrays
    const eliminateItem = (item) => {
        let index = cartArray.findIndex(element => element.id ===item.id);
        cartArray.splice(index,1);
        console.log("esta es la posicion del elemtno a elimintar"+ index)
    }




    //get total value of cart productSelected
    const getTotalCartValue = cartArray.reduce((acumulator, current) => {
            return acumulator + current.quantity * current.price;       
        },0);
    
        
    return(<AppContext.Provider value={{cartArray, handleCartArray, countIndividualCartItems, eliminateItem, getTotalCartValue}}>{children}</AppContext.Provider>)
}





export default useAppContext
      




