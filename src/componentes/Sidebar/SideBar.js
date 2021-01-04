import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.scss';


const SideBar = () => {
	const [order, setOrder] = useState("");
	const [menuOpen, setMenuOpen] = useState(false);
	const handleOrderChange = (event) => {
		setOrder(event.target.value);
	};



	const closeMenu = () => {
		setMenuOpen(false);

	}

	useEffect(() => {
		closeMenu();
	}, []);



	return (<>
		<Menu className="side_bar_menu" left isOpen={menuOpen} >
			<Link style={{ textDecoration: 'none', color: 'white' }} to={'/'} onClick={() => closeMenu()}>Home</Link>
			<Link style={{ textDecoration: 'none', color: 'white' }} to={'/cart'} onClick={() => closeMenu()}>Cart</Link>
			<br /><br /><br />
			<div className="order_serach_section">
				<input className="order_search_input" type="text" placeholder="Ingrese codigo de pedido" value={order} onChange={handleOrderChange} />
				<Link className="order_search_link" style={{ textDecoration: 'none' }} to={`/order/${order}`}>Ver estado de mi pedido --></Link>
			</div>
		</Menu>
	</>
	);
}


export default SideBar;