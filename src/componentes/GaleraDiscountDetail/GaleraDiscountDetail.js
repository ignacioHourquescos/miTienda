import React from 'react';
import './GaleraDiscountDetail.scss';


const ItemPurchaseIndicator = ({ article, onChange }) => {

	function handleChange() {
		onChange(false);
	}

	return (
		<div className="galera_discount_detail">

			<div className="description">
				{article.galera}
			</div>

			<button className="close_galera_discount_description" onClick={() => { handleChange() }}>OK</button>

		</div>
	)
}

export default ItemPurchaseIndicator;





