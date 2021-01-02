

import React, { createContext, useContext, useState } from 'react'
const AppContext = createContext()


//Product array cart
const useAppContext = () => useContext(AppContext)


export const AppProvider = ({ children}) => {

    const [cartArray, setCartArray] = useState([]);
    const [menuOpenState, setMenuOpenState] = useState(false)

    //FUNCTION ADDS ITEMS TO CART 
    const handleCartArray = (units, newItem) => { 

        const existing = cartArray.find((article)=>article.id=== newItem.id);
        if (existing) {
            existing.quantity = existing.quantity +units;
            setCartArray([...cartArray]);
        }
        else setCartArray([...cartArray, {"id":newItem.id,"quantity":units,"name" :newItem.name,"price":newItem.price, "img":newItem.img}]);
            
    }

    //CALCULATES NUMBER OF UNITS OF A CERTAIN PRODUCT
    const ItemQuantity = (item) => {
        let aux=0;
        aux = cartArray.find(element =>element.id===item.id);
        if (!aux) return 0;
        return aux.quantity;
    }

    //ELIMINATE AN EXISTING ITEM OF THE CART
    const eliminateItem = (item) => {
        let index = cartArray.findIndex(element => element.id ===item.id);
        cartArray.splice(index,1);
        setCartArray([...cartArray]);
    }

    //CALCULATES LENGTH OF THE CART / NUMBER OF ITEMS
    const countIndividualCartItems = (elemento) => {
        var counter = 0;
        for (var i = 0; i < elemento.length; i++) {counter = counter + elemento[i].quantity;}
        return counter;
    };


    //CALULATES TOTAL VALUE OF CART
    const getTotalCartValue = cartArray.reduce((acumulator, current) => {
            return acumulator + current.quantity * current.price;       
        },0);
    
        
    return(
    <AppContext.Provider value={
        {cartArray, 
        handleCartArray,
        countIndividualCartItems,
        eliminateItem, 
        ItemQuantity,
        getTotalCartValue}}>
    {children}</AppContext.Provider>)
}





export default useAppContext
      




