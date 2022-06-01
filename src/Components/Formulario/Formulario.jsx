import React, { useState } from 'react'
import useFirebase from '../../Hooks/useFirebase';
import "./Formulario.css"
import { addDoc, collection } from 'firebase/firestore'
import Swal from 'sweetalert2'

import db from '../../Service/Firebase'

const Formulario = ({cantTotal, compra, cart}) => {
  
  /* console.log(cantTotal, compra); */
  /* console.log("cantTotal: ", cantTotal);
  console.log("compra", compra);
  console.log("cart", cart.cart); */
  
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
  
  const handleChange = (e) => {
      const {name, value} = e.target;
      console.log(e.target);
      setformulario({
          ...formulario,
          buyer: {
              ...formulario.buyer,
              [name]: value,
          },
      });
      console.log(formulario)
  };
  
  const {buyer: {email, nombre, apellido, telefono},} = formulario;
  
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
        /* console.log(col) */
        console.log("datos", datos)
        const order = await addDoc(col, datos)
        /* console.log(order.id)
        console.log("datos", datos) */
        compraAlarm();
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
    {/* <label for="exampleInputEmail1">Email address</label> */}
    <input name='email' value={email} type="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresá tu email"/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    {/* <label for="nombre">Ingres[a</label> */}
    <input name='nombre' value={nombre} type="text" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Ingresá tu nombre"/>
  </div>
  <div className="form-group">
    {/* <label for="exampleInputPassword1">Password</label> */}
    <input name='apellido' value={apellido} type="text" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Ingresá tu apellido"/>
  </div>
  <div className="form-group">
    {/* <label for="exampleInputPassword1">Password</label> */}
    <input name='telefono' value={telefono} type="text" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Ingresá tu teléfono"/>
  </div>
  <div className="form-check">
    {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/> */}
    {/* <label className="form-check-label" for="exampleCheck1">Confirmar compra</label> */}
  </div>
  <button onClick={onSubmit} type="submit" className="btn btn-primary">Confirmar compra</button>
</form>
</>


  )
}

export default Formulario