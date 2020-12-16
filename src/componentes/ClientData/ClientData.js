import React, { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {getFirestore} from '../../firebase'
import swal from 'sweetalert'

//AppContext
import useAppContext from '../../context/UseAppContext';

const MySwal = withReactContent(Swal);

let enterData = {
  title: 'Ingrese sus datos',
  focusConfirm: false,
  html: `
    <input class="swal2-input" id="name"      type="text" placeholder="Nombre" /><br />
    <input class="swal2-input" id="mail"      type="mail" placeholder="Mail" /><br />
    <input class="swal2-input" id="phone" type="phone" placeholder="Telefono" />
  `,
  type: 'warning',
  showCancelButton: true,
  cancelButtonColor: 'grey',
  confirmButtonText: 'Confirmar',
  allowOutsideClick: false,
  preConfirm: () => ({
    name: document.getElementById('name').value,
    mail: document.getElementById('mail').value,
    phone: document.getElementById('phone').value
  })
};

const ClientData = () =>{
  const [formdata, setformdata] = useState();
  const {getTotalCartValue,cartArray} = useAppContext();

  const handleResetPassword = () => {
    const resetPw = async () => {
      const swalval = await MySwal.fire(enterData);  
      
      if (true) {
        if (swalval.value.name=='' ) {
          await MySwal.fire({ type: 'error', title: 'Complete su nombre' });
          resetPw();
        } else if (swalval.value.mail=='' && swalval.value.phone==''){
          await MySwal.fire({ type: 'error', title: 'Complete al menos un dato de contacto' });
          resetPw();
        }
        else  {
          setformdata(swalval);
          let purchase ={
            buyer: {name:swalval.value.name, mail:swalval.value.mail, phone:swalval.value.phone},
            items: cartArray,
            total: getTotalCartValue,
            date: new Date()
          }
        const db =getFirestore().collection("Purchases").add(purchase)
        .then(({id})=> {
           swal("Gracias "+ swalval.value.name+ "!\n" +"Tu compra fue ingresada correctamente \n" + "Nro orden: " + id);
        }).catch(error =>{
            swal("ocurrio un error. Intente nuevamente!");
        })
        }
      }
    }
    console.log(formdata);
   
    resetPw();
  }

  return (
    <div>
      <button onClick={handleResetPassword}>Confirmar Compra</button>
    </div>
  );
}

export default ClientData;
