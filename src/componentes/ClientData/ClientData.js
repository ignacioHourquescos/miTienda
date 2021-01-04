import React, { useState } from "react";
import "./ClientData.scss";
import { getFirestore } from '../../firebase'
import useAppContext from '../../context/UseAppContext';
import swal from 'sweetalert';
const ClientData = () => {

	const { getTotalCartValue, getTotalCartValueDiscount, cartArray } = useAppContext();
	const [adress, setAdress] 	= useState("");
	const [region, setRegion] 	= useState("");
	const [name, setName] 		= useState("");
	const [phone, setPhone] 	= useState("");
	const [mail, setEmail] 		= useState("");
	const [mail2, setEmail2] 	= useState("");
	const [purchaseInProgress, setPurchaseInProgress] = useState(true);
	const handleNameChange 		= (event) => { setName(event.target.value); };
	const handlePhoneChange 	= (event) => { setPhone(event.target.value); };
	const handleEmailChange 	= (event) => { setEmail(event.target.value); };
	const handleEmail2Change	= (event) => { setEmail2(event.target.value); };
	const handleAdressChange 	= (event) => { setAdress(event.target.value); };
	const handleRegionChange 	= (event) => { setRegion(event.target.value); };


	const purchaseInit = () => {
		if (cartArray.length === 0) {
			swal("Su Carrito esta vacio!");
			return;
		}

		window.scroll({
			top: document.body.offsetHeight,
			left: 0,
			behavior: 'smooth',
		});

		if (adress === "") { swal("Ingrese su dirección"); return; }
		if (region === "") { swal("Debe elegir un barrio"); return; }

		setPurchaseInProgress(false)
	}

	const formValidation = () => {

		if (cartArray.length === 0) {
			swal("carrito vacio");
			return;
		}

		window.scroll({
			top: document.body.offsetHeight,
			left: 0,
			behavior: 'smooth',
		});
	
		const mailRegex = /^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
		const phoneRegex = /^[0-9]+$/;

		if (name === "") 									{ swal("Debe ingresar un nombre y apellido"); return; }
		if (phone.trim() === "" || !phoneRegex.test(phone)) { swal("Debe ingresar un teléfono valido"); return; }
		if (mail.trim() === "") 							{ swal("Debe ingresar un e-mail"); return; }
		if (!mailRegex.test(mail)) 							{ swal("Debe ingresar un e-mail válido"); return; }
		if (mail.trim() !== mail2.trim()) 					{ swal("Los email son diferentes"); return; }


		//GENERATE OBJECT TO POST IN FIREBASE
		if (cartArray.length === 0) {
			swal("carrito vacio");
			return;
		}
		else if (purchaseInProgress === false) {
			let purchase = {
				buyer: { name: name, mail: mail, phone: phone },
				items: cartArray,
				total: getTotalCartValue,
				date: new Date(),
				estado: "generada"
			}
			getFirestore().collection("Purchases").add(purchase)
				.then(({ id }) => { swal("Gracias " + name + "!\n Tu compra fue ingresada correctamente \n Nro orden: " + id); })
				.catch(error => { swal("ocurrio un error. Intente nuevamente!"); })

		}
		//CHANGE TRIGGER PURCHASE BUTTON NAMES
		setPurchaseInProgress(false)

	};

	return (<>
		<div className="client_data">
			<div className="client_data_cart_detail">
				<h1>Tu Carrito</h1>
				<div>
					<h1 className="cart">Subtotal:</h1>
					<h1 className="cart">${getTotalCartValue}</h1>
				</div>
				<div>
					<h1 className="discount">Descuento de la Galera:</h1>
					<h1 className="discount">${getTotalCartValueDiscount}</h1>
				</div>
				<hr />
				<div>
					<h1 className="total">Total:</h1>
					<h1 className="total">${getTotalCartValue - getTotalCartValueDiscount}</h1>
				</div>
			</div>
			{purchaseInProgress
				?//IF PURCHASE IS NOT IN PROGESS SHOW LOCATION INPUTS
				<>
					<div className="client_data_input">
						<input type="text" placeholder="Direccion" value={adress} onChange={handleAdressChange} />
						<input type="tel" placeholder="Barrio" value={region} onChange={handleRegionChange} />
					</div>
					<div className="client_data_checkout">
						<button className="client_data_checkout_button" onClick={purchaseInit}>Iniciar Compra</button>
						<button className="client_data_checkout_button_mobile" onClick={purchaseInit}>iniciar Compra</button>
					</div>
				</>
				://IF PURCHASE IS IN PROGRESS SHOW PERSONAL DETAIL INPUTS
				<>
					<div className="client_data_input">
						<input type="text" placeholder="Nombre" value={name} onChange={handleNameChange} />
						<input type="tel" placeholder="Telefono" value={phone} onChange={handlePhoneChange} />
						<input type="mail" placeholder="Email" value={mail} onChange={handleEmailChange} />
						<input type="text" placeholder="Reingrese Mail" value={mail2} onChange={handleEmail2Change} />
					</div>
					<div className="client_data_checkout">
						<button className="client_data_checkout_button" onClick={formValidation}>Confirmar Compra</button>
						<button className="client_data_checkout_button_mobile" onClick={formValidation}>Confirmar Compra</button>
					</div>
				</>
			}
		</div>
	</>);
}

export default ClientData