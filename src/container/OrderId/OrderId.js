import React, {useEffect, useState} from 'react';
import './OrderId.scss';
import {getOrderById} from '../../lib/database';
import {useParams} from 'react-router-dom';

const OrderId = () =>{
    
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState();
    
    //const {order}="OEvLgJokpduAIWsC8Hes";
    const {id}=useParams();

    useEffect(() => {

        getOrderById(id)
            .then((result) => {setProducts(result.items);setTotal(result.total)})
    }, [id]);



    return(<>
        <div className="order_container">
            {products.length === 0
            ?   <h1>No hay productos asociado a ese numero de orden</h1>
            :   <div className="cart_list">
                    <h1>Pedido: #{id} </h1>
                    <h1>Total: ${total} </h1>
                    {products.map((element) => ( 
                        <div key={element.id} className="cart_list_row">
                            <div className="imagexyz">
                                <img className="img" src={element.img} alt={element.img}></img>
                            </div> 
                            <div className="cart_list_data">
                                <div className="cart_item_main">
                                    <h4> {element.quantity} x </h4>
                                    <h4>{element.name}</h4>
                                </div>
                                <div className="cart_item_secondary">
                                    <h4>${element.price}c/u</h4>
                                    <h4>${element.price * element.quantity}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
        </>
    )
}

export default OrderId;

