import React , {useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Cart = () => {
    const {userid} = useParams();
    useEffect(() =>{
        console.log("Parametro recibido en useEffect: ", userid);
        return() =>{
            console.log("Parametro recibido al final: "+ userid);
        }
    },[userid]);
    return (
        <div>
            {console.log("Adentor del carrito del ususario" + userid)
            }
            
        </div>
    )
}

export default Cart;

