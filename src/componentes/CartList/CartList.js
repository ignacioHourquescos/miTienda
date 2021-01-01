import React  from 'react';
import useAppContext from '../../context/UseAppContext';
import {Link} from 'react-router-dom';
import './CartList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../ItemCount/ItemCount'


const CartList = () => {

    //Variable & function from context
    const {cartArray, eliminateItem} = useAppContext();

    return (
        <div className="cart_list"> 

            {cartArray.map((element) =>(
                <div className="cart_list_row">
                    <div className="imagexyz">
                        <Link to={`/product/${element.id}`} ><img className="img"  src={element.img} alt={element.img}></img></Link> 
                    </div> 
                    <div className="cart_list_data">
                        <div className="cart_item_main">
                            <ItemCount initial={element.quantity} product={element}/>
                            <h4>{element.name}</h4>
                        </div>
                        <div className="cart_item_secondary">
                            <h4>${element.price}c/u</h4>
                            <h4>${element.price*element.quantity}</h4>
                            <FontAwesomeIcon onClick={()=>{eliminateItem(element)}} style={{color:'tomato'}} icon={faTrash} />
                        </div> 
                    </div>      
                </div>
            ))}
        </div>
    )
}

export default CartList;
