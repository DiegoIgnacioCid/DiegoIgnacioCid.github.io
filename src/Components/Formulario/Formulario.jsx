import React, { useContext, useState } from 'react'
import useFirebase from '../../Hooks/useFirebase';
import "./Formulario.css"
import { addDoc, collection } from 'firebase/firestore'
import Swal from 'sweetalert2'
import GlobalContextProvider, { GlobalContext } from '../../Context/GlobalContextProvider';


import db from '../../Service/Firebase'

const Formulario = ({cantTotal, compra, cart}) => {

  const {cartTotal, cantidadTotal} = useContext(GlobalContext);
  
  
  const [formulario, setformulario] = useState({
      buyer: {
          email: "",
          nombre: "",
          apellido: "",
          telefono: "",
      },
      total: cantTotal.cartTotal,
      items: compra.cantidadTotal,
      purchase: {...cart.cart}
  });
  

/* Completa el formulario con los datos ingresados en los campos */

  const handleChange = (e) => {
      const {name, value} = e.target;
      console.log(e.target);
      setformulario({
          ...formulario,
          buyer: {
              ...formulario.buyer,
              [name]: value,
          },
          /* LAS DOS SIGUIENTES AGREGADAS */
          total: cartTotal,
          items: cantidadTotal
      });
      /* console.log(formulario) */
  };
  
  const {buyer: {email, nombre, apellido, telefono},} = formulario;
  
  /* Alarmas para el caso de exito o problema en la compra */
  const compraAlarm = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Compra exitosa!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const errAlarm = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      
    })
  }
  

  /* FUNCION DE PRUEBA */
  const fetchGenerateTicket = async ({datos}) => {
    try {
        const col = collection(db, "ordenes")
        const order = await addDoc(col, datos)
        compraAlarm();
        /* document.location.reload(true); */
    } catch (error) {
        console.log("error", error);
        errAlarm();
    }
  }
  
const onSubmit = (e) => {
    e.preventDefault();
    fetchGenerateTicket({datos: formulario})
}




  
  
    return (
    
<>
<form id='formulario'>
  <div className="form-group">
    <input name='email' value={email} type="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresá tu email"/>
  </div>
  <div className="form-group">
    <input name='nombre' value={nombre} type="text" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Ingresá tu nombre"/>
  </div>
  <div className="form-group">
    <input name='apellido' value={apellido} type="text" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Ingresá tu apellido"/>
  </div>
  <div className="form-group">
    <input name='telefono' value={telefono} type="text" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Ingresá tu teléfono"/>
  </div>
  <div className="form-check">
  </div>
  <button onClick={onSubmit} type="submit" className="btn btn-warning">Confirmar compra</button>
</form>
</>


  )
}

export default Formulario