import React from 'react';
import useAppContext from '../../context/UseAppContext';
import './Cart.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../ItemCount/ItemCount'



const Cart = () => {

    const { cartArray, eliminateItem } = useAppContext();



    return (
        <>
            {cartArray.length === 0
                ? <h1 className="empty_cart">No tiene productos en el carrito</h1>
                : <div className="cart_list">
                        {cartArray.map((element) => ( 
                            <div key={element.id} className="cart_list_row">
                                
                                <div className="imagexyz">
                                    <Link to={`/product/${element.id}`} >
                                        <img className="img" src={element.img} alt={element.img}></img>
                                    </Link>
                                </div>
                                
                                <div className="cart_list_data">
                                    <div className="cart_item_main">
                                        <ItemCount initial={element.quantity} product={element} />
                                        <h4>{element.name}</h4>
                                        <h3>{element.quantity>=element.min? element.galera: ""}</h3>
                                    </div>
                                    <div className="cart_item_secondary">
                                        <h4>${element.price}c/u</h4>
                                        <h4>{element.quantity>=element.min? element.discount+"%": ""}</h4>
                                        <h4>${element.quantity>=element.min? element.price * element.quantity * (1-(element.discount/100)) :element.price * element.quantity}</h4>
                                        <FontAwesomeIcon onClick={() => { eliminateItem(element) }} style={{ color: 'tomato' }} icon={faTrash} />
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>}
        </>
    )
}

export default Cart;
