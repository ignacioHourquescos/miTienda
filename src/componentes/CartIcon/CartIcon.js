import React, { useEffect, useState } from 'react';
import './CartIcon.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


//App Context
import useAppContext from '../../context/UseAppContext';




const CartIcon = () => {

	//Variable & function from context
	const { cartArray, countIndividualCartItems, getTotalCartValue, getTotalCartValueDiscount } = useAppContext();
	const [cartItems, setCartItems] = useState(0);

	useEffect(() => {
		setCartItems(countIndividualCartItems(cartArray))
	}, [cartArray, countIndividualCartItems])

	const scrollTop = () =>{	
		window.scroll({
			top: 0,
			left: 0, 
			behavior: 'smooth',
		  });
	}

	return (
		<Link to={`/cart/`} onClick={scrollTop}>
			<div className="sidebar">
				<div className="menu">
					<div className="counter_cart_icon">{cartItems}</div>
					<FontAwesomeIcon style={{ color: 'white' }} icon={faShoppingCart} />
					<div className="total_value_icon">{getTotalCartValue === 0 ? " " : "$" + (getTotalCartValue - getTotalCartValueDiscount)}</div>
				</div>
			</div>
		</Link>
	)
}

export default CartIcon;