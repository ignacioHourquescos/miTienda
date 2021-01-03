import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';
import ItemPurchaseIndicator 	from '../ItemPurchaseIndicator/ItemPurchaseIndicator'
import GaleraDiscountDetail 	from '../GaleraDiscountDetail/GaleraDiscountDetail'
import useAppContext 		from '../../context/UseAppContext';
import galera			from '../../images/galera.png';



const Item = ({ article, loadingArticle }) => {

	const { cartArray, handleCartArray } = useAppContext();
	const [purchaseInProgress, setPurchaseInProgress] = useState(false);
	const [galeraDiscount, setGaleraDiscount] = useState(false);
	const [aux, setAux] =useState(true);
	const [units, setUnits] = useState(1);
	

	const handleChange = newValue => {setPurchaseInProgress(newValue); setAux(true);}
	const handleGaleraChange = () => setGaleraDiscount(false);
	const showGaleraDiscount = () => setGaleraDiscount(true);
	
	
	useEffect(() => {
		if (cartArray.find(element => element.id === article.id)) {setPurchaseInProgress(true); setAux(false);}
		else setPurchaseInProgress(false)
	}, [cartArray, article.id])


	return (<>
		{loadingArticle ? <h1>Loading...</h1> :
			<div className="product_grid">
				<div className="card_holder">



					{/*/////////////CARD OVERLAYS//////////*/}
					{galeraDiscount 
						? <GaleraDiscountDetail article={article} onChange={handleGaleraChange} /> 
						: ""
					}
					{purchaseInProgress 
						? <ItemPurchaseIndicator article={article} onChange={handleChange} /> 
						: ""
					}



					{/*/////////////CARD IMAGE//////////*/}
					<div className="image_container">
						<div onClick={() => { showGaleraDiscount() }}>
							{(article.galera && aux)
								?<div className="galera_discount">
									<img className="go_home_icon_2" src= {galera} alt="galera" />
								 </div> 
								: " "
							}
						</div>
						<Link to={`/product/${article.id}`} style={{ backgroundColor: "white", padding:"0rem" }}  >
							<img style={{ backgroundColor: "white" }} className="image" src={article.img} alt={article.desc} />
						</Link>
					</div>




					{/*/////////////CARD FOOTER//////////*/}
					<div className="data_container">
						<Link className="link_to_product" to={`/product/${article.id}`} >
							<h2>{article.name}</h2>
							<h3 className="price"> ${article.price}</h3>
						</Link>
						<div className="add_to_cart">
							<button onClick={() => { 
								handleCartArray(units, article);
								setPurchaseInProgress(true);
								setAux(false) 
								}}>
								AGREGAR
							</button>
						</div>
					</div>



				</div>
			</div>
		}
	</>
	)
}

export default Item;





