import React  from 'react';
//Components & CSS
import Cart from '../../componentes/Cart/Cart'
import './CartContainer.scss';
import ClientData from '../../componentes/ClientData/ClientData';
import {getFirestore} from '../../firebase'
import swal from 'sweetalert'

//AppContext
import useAppContext from '../../context/UseAppContext';

const AddToCart = () => {

    const {getTotalCartValue,cartArray} = useAppContext();
    


    return (
        <div className="cart_container"> 
            <div className="cart_actions">
                <h1>Tu Carrito:</h1>
                <h1>${getTotalCartValue}</h1>
                {/* <ClientData/> */}
                 <button onClick={() =>{
                     let purchase ={
                         buyer: {name:"Facundo Cabral", mail:"facundocabal@gmail.com", phone:"1154326432"},
                         items: cartArray,
                         total: getTotalCartValue,
                         date: new Date()
                         
                     }

                     const db =getFirestore().collection("Purchases").add(purchase)
                     .then(({id})=> {
                        swal("Su compra fue ingresada correctamente \n" + "Tu numero de orden: " + id);
                     }).catch(error =>{
                         swal("ocurrio un error. Intente nuevamente!");
                     })
                     console.log(purchase)
                 }}>pedir</button>
            </div>
            <Cart/>  
        </div>      

    )
}

export default AddToCart

