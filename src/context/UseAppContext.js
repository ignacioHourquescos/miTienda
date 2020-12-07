

import React, { createContext, useEffect, useContext, useState } from 'react'
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

    const handleCartArray = (units, newItem) => { 
        setCartArray([...cartArray, {"quantity":units, "id":newItem.id,"name" :newItem.name,"price":newItem.price, "img":newItem.img}]);
        console.log(cartArray);
    }
        
    return(<AppContext.Provider value={{cartArray, handleCartArray, countIndividualCartItems}}>{children}</AppContext.Provider>)
}





export default useAppContext
      




