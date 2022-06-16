import React, { useContext, useEffect, useState } from 'react'
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
    buttonState();
      const {name, value} = e.target;
      /* console.log(e.target); */
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
  
  /* const {buyer: {email, nombre, apellido, telefono},} = formulario; */

  const itemRender = () => {
    const compra  = formulario.purchase;
      return (
        `${Object.entries(compra).map((prod) => `<p>${prod[1].cantidad} unidades de queso ${prod[1].id}. Valor: $ ${prod[1].precioTotal}</p>`)}` 
      
    )
  }
  
  /* Alarmas para el caso de exito o problema en la compra */
  
  const compraAlarm = (order) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Compra exitosa!',
      
      html: 
      `<h4>Detalle de tu compra:</h4>` +
      itemRender() +
      
      `<h4>Valor total: $ ${cartTotal}</h4>` +
      `<h6>ID de la compra: ${order}</h6>`,
      showConfirmButton: true,
      /* timer: 1500 */
    })
  }

  const errAlarm = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo no funcionó bien!',
      
    })
  }
  
  const mailAlarm = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingrese un correo electronico válido!',
      
    })
  }
  

  /* FUNCION DE PRUEBA */
  const fetchGenerateTicket = async ({datos}) => {
    try {
        const col = collection(db, "ordenes")
        const order = await addDoc(col, datos)
        compraAlarm(order.id);
        /* console.log(order.id); */
        /* document.location.reload(true); */
    } catch (error) {
        console.log("error", error);
        errAlarm();
    }
  }
  
const onSubmit = (e) => {
    e.preventDefault();
    if (ValidateEmail(document.querySelector("input[name='email']").value)) {
      fetchGenerateTicket({datos: formulario})
      const size = Object.keys(formulario.purchase).length;
      /* console.log("Mail correcto"); */

    }
}

/* Dispara la funcion de verificacion cuando cambia el estado de cartTotal, para evitar que se vacie el carrito despúes de habilitado el boton de compra y permanezca activo */
useEffect(() => {
  buttonState();
  
  
}, [cartTotal])


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  } else {
    mailAlarm();
    return (false)

  }
}


const [disable, setDisable] = useState(true);


/* Funcion que habilita el boton de compra solo cuando todos los campos estén completos y el carrito con algo */
const buttonState = () => {
  const email = document.querySelector("input[name='email']");
  const nombre = document.querySelector("input[name='nombre']");
  const apellido = document.querySelector("input[name='apellido']");
  const telefono = document.querySelector("input[name='telefono']");
  
  
  if ((email.value.length != 0) && (nombre.value.length != 0) && (apellido.value.length != 0) && (telefono.value.length != 0) && (cartTotal > 0)) {
    setDisable(false);
  } else {
    setDisable(true);
  }
}
  
    return (
    
<>
<form id='formulario'>

  {/* Principio DRY: no repetir campos de input */}
{Object.keys(formulario.buyer).map((key, index) => (
  <div className="form-group">
  <input key={index} name={`${key}`} value={key.value} type="text" onChange={handleChange} className="form-control" placeholder={`${key}`}/>
  </div>
))}

  {/* <div className="form-group">
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
  </div> */}
  <div className="form-check">
  </div>
  <button onClick={onSubmit} disabled={disable} type="submit" className="btn btn-warning">Confirmar compra</button>
</form>
</>


  )
}

export default Formulario