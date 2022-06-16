import React, { useState } from 'react'
import "./Cart.css"
/* import useFirebase from '../Hooks/useFirebase'; */
import { addDoc, collection } from 'firebase/firestore'
import Swal from 'sweetalert2'
import db from '../Service/Firebase'



const Contact = () => {
    
    const [formulario, setformulario] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
        });


        const handleChange = (e) => {
            const {name, value} = e.target;
            setformulario({
                ...formulario,
                [name]: value
            });
            /* console.log(formulario) */
        };

    
      /* FUNCION DE PRUEBA */
      const fetchGenerateTicket = async ({datos}) => {
        try {
            const col = collection(db, "contacto")
            const order = await addDoc(col, datos)
            contactoAlarm();
            /* document.location.reload(true); */
        } catch (error) {
            console.log("error", error);
        }
      }
      
    const onSubmit = (e) => {
        e.preventDefault();
        if (checkInputs()) {
            if (ValidateEmail(document.querySelector("input[name='email']").value)){

                fetchGenerateTicket({datos: formulario})
            }
        } else {
            inputAlarm();
        }
    }
    
    
    
    const contactoAlarm = () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Mensaje enviado!',
          showConfirmButton: false,
          timer: 1500
        })
      }

      const mailAlarm = () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ingrese un correo electronico válido!',
          
        })
      }
      
      const inputAlarm = () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Complete todos los campos requeridos!',
          
        })
      }


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


      /* Funcion que habilita el boton de compra solo cuando todos los campos estén completos y el carrito con algo */
      const checkInputs = () => {
        const email = document.querySelector("input[name='email']");
        const nombre = document.querySelector("input[name='name']");
        const subject = document.querySelector("input[name='subject']");
        const message = document.querySelector("textarea[name='message']");
        
        console.log(message.value.length);
        
        if ((email.value.length != 0) && (nombre.value.length != 0) && (subject.value.length != 0) && (message.value.length != 0)) {
          return(true);
        } else {
          return(false);
        }
      }


  return (
    <>
    
    
    <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
            <h1 className="h1">Contactanos</h1>
            <p>
                Sin queso, la vida no tendria sentido. F. Nietzsche.
            </p>
        </div>
    </div>
    
    <div className="container py-5">
        <div className="row py-5">
            <form className="col-md-9 m-auto" method="post" role="form">
                <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label for="inputname">Nombre</label>
                        <input type="text" onChange={handleChange} className="form-control mt-1" id="name" name="name" placeholder="Nombre"/>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label for="inputemail">Email</label>
                        <input type="email" onChange={handleChange} className="form-control mt-1" id="email" name="email" placeholder="Email"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="inputsubject">Título</label>
                    <input type="text" onChange={handleChange} className="form-control mt-1" id="subject" name="subject" placeholder="Título"/>
                </div>
                <div className="mb-3">
                    <label for="inputmessage">Comentario</label>
                    <textarea onChange={handleChange} className="form-control mt-1" id="message" name="message" placeholder="Comentario" rows="8"></textarea>
                </div>
                <div className="row">
                    <div className="col text-end mt-2">
                        <button onClick={onSubmit} type="submit" className="btn btn-warning btn-lg px-3 head">Mande!</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    


    
    </>
  )
}

export default Contact