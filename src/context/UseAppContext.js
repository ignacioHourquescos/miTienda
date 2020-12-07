

import React, { createContext, useEffect, useContext, useState } from 'react'





const AppContext = createContext()

const useAppContext = () => useContext(AppContext)





export const AppProvider = ({ children}) => {

    const [cartArray, setCartArray] = useState([]);

    const handleCartArray = (units, newItem) => { 
        setCartArray([...cartArray, {"quantity":units, "id":newItem.id,"name" :newItem.name,"price":newItem.price, "img":newItem.img}]);
        console.log(cartArray);
    }
        

    return(
    <AppContext.Provider value={{cartArray, handleCartArray}}>{children}</AppContext.Provider>
    )
}





export default useAppContext
      




