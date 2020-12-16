import React, { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

let changePwSwal = {
  title: 'Change Password?',
  focusConfirm: false,
  html: `
    <input class="swal2-input" id="currentPassword" type="password" placeholder="Enter your current password..." /><br />
    <input class="swal2-input" id="newPassword1" type="password" placeholder="Enter your new password..." /><br />
    <input class="swal2-input" id="newPassword2" type="password" placeholder="Confirm your new password..." />
  `,
  type: 'warning',
  showCancelButton: true,
  cancelButtonColor: 'grey',
  confirmButtonText: 'Update!',
  allowOutsideClick: false,
  preConfirm: () => ({
    currentPassword: document.getElementById('currentPassword').value,
    newPassword1: document.getElementById('newPassword1').value,
    newPassword2: document.getElementById('newPassword2').value
  })
};

const ClientData = () =>{
  const [formdata, setformdata] = useState();

  const handleResetPassword = () => {
    const resetPw = async () => {
      const swalval = await MySwal.fire(changePwSwal);
      let v = swalval && swalval.value || swalval.dismiss;
      if (v && v.currentPassword && v.newPassword1 && v.newPassword2 || v === 'cancel') {
        if (v.newPassword1 !== v.newPassword2) {
          await MySwal.fire({ type: 'error', title: 'Passwords do not match!' });
          resetPw();
        } else if (v !== 'cancel') {
          setformdata(swalval);
        }
      } else {
        await MySwal.fire({ type: 'error', title: 'All fields are required!!' });
        resetPw();
      }
    }
    console.log(formdata);
    resetPw();
  }

  return (
    <div>
      <button onClick={handleResetPassword}>Reset Password</button>
      <h5>{JSON.stringify(formdata, null, 2)}</h5>
    </div>
  );
}

export default ClientData;
