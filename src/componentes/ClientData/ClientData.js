import React, { useState } from "react";
import "./ClientData.scss";
import { getFirestore } from '../../firebase'
import useAppContext from '../../context/UseAppContext';
import Swal from 'sweetalert2';
import swal from 'sweetalert';

const ClientData = (props) => {

	const { getTotalCartValue, cartArray } = useAppContext();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [mail, setEmail] = useState("");
	const [mail2, setEmail2] = useState("");
	const handleNameChange = (event) => { setName(event.target.value); };
	const handlePhoneChange = (event) => { setPhone(event.target.value); };
	const handleEmailChange = (event) => { setEmail(event.target.value); };
	const handleEmail2Change = (event) => { setEmail2(event.target.value); };

	const validar = () => {

		//FORM VALIDATION OF INPUTS
		const mailRegex = /^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
		const phoneRegex = /^[0-9]+$/;


		if (name === "") 									{ swal("Debe ingresar un nombre y apellido"); return; }
		if (phone.trim() === "" || !phoneRegex.test(phone)) { swal("Debe ingresar un teléfono valido"); return; }
		if (mail.trim() === "") 							{ swal("Debe ingresar un e-mail"); return; }
		if (!mailRegex.test(mail)) 							{ swal("Debe ingresar un e-mail válido"); return; }
		if (mail.trim() !== mail2.trim()) 					{ swal("Los email son diferentes"); return; }



		//GENERATE OBJECT TO POST IN FIREBASE
		let purchase = {
			buyer: { name: name, mail: mail, phone: phone },
			items: cartArray,
			total: getTotalCartValue,
			date: new Date()
		}
		const db = getFirestore().collection("Purchases").add(purchase)
			.then(({ id }) => {
				swal("Gracias " + name + "!\n" + "Tu compra fue ingresada correctamente \n" + "Nro orden: " + id);
			}).catch(error => {
				swal("ocurrio un error. Intente nuevamente!");
			})
	};

	return (
		<>
			<div className="client_data">
				<div>
					<h1>Tu Carrito:${getTotalCartValue}</h1>
				</div>

				<div className="client_data_input">
					<input type="text" 	placeholder="Nombre" 	 		value={name} 	onChange={handleNameChange} />
					<input type="tel" 	placeholder="Telefono" 	 		value={phone} 	onChange={handlePhoneChange} />
					<input type="mail" 	placeholder="Email" 	 		value={mail} 	onChange={handleEmailChange} />
					<input type="text" 	placeholder="Reingrese Mail" 	value={mail2} 	onChange={handleEmail2Change} />
				</div>

				<div className="client_data_checkout">
					<button className="client_data_checkout_button" 		onClick={validar}>Finalizar Compra</button>
					<button className="client_data_checkout_button_mobile" 	onClick={validar}>Finalizar Compra</button>
				</div>

			</div>
		</>
	);
}

export default ClientData