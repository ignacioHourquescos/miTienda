import React  from 'react';
import useAppContext from '../../context/UseAppContext';
import {Link} from 'react-router-dom';
import './CartList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../ItemCount/ItemCount'


const CartList = () => {

    //Variable & function from context
    const {cartArray, eliminateItem} = useAppContext();

    return (
        <div className="cart_list"> 

            {cartArray.map((element) =>(
                <div className="cart_list_row">
                    <div><Link to={`/product/${element.id}`} ><img  src={element.img} alt={element.img}></img></Link> </div> 
                    <div><ItemCount initial={element.quantity} product={element}/></div>
                    <h4>{element.name}</h4>
                    <h4>${element.price}c/u</h4>
                    <h4>${element.price*element.quantity}</h4>
                    <FontAwesomeIcon onClick={()=>{eliminateItem(element)}} style={{color:'grey'}} icon={faTimesCircle } />
                    
                       
                </div>
            ))}
        </div>
    )
}

export default CartList;
