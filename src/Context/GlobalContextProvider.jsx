import React, { createContext, useEffect, useState } from 'react'
import db from '../Service/Firebase';
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

export const GlobalContext = createContext('');

const GlobalContextProvider = ({children}) => {

  const [cart, setCart] = useState([])
  const [cartTotal, setcartTotal] = useState(0);
  const [cantidadTotal, setcantidadTotal] = useState(0);


  // sirve para llevar la cuenta del total de la compra
  let total = 0;
  const contadorTotal = () => {
    cart.map(x => total += x.precioTotal);
    /* console.log("total en cartContext", total); */
    setcartTotal(total);
  }
 
  let cantiTotal = 0;
  const contadorCantTotal = () => {
    cart.map(x => cantiTotal += x.cantidad);
    setcantidadTotal(cantiTotal);
  }


  const eliminarProd = (producto) => {
    let copiaArray = cart;
    const indexProd = copiaArray.findIndex(x => x.id === producto);
    /* console.log("cart", cart); */
    /* cart.map(x => console.log(x)); */
    /* console.log("producto", producto);*/
    console.log("indexprod", indexProd);
    console.log("copiaArray", copiaArray); 
    copiaArray.splice(indexProd, 1);
    console.log("copiaArray",  copiaArray);
    console.log("nuevo cart", cart); 
    setCart(copiaArray);
    contadorTotal(); 
    contadorCantTotal();
 }

  
  useEffect(() => {
    contadorTotal(); 
    contadorCantTotal();
    /* console.log("Cambio contador total o cantidad total. Usado el UseEffect del CartContext")
    console.log("Nuevo cart: ", cart); */
    
  }, [cart])
  
  // las funciones pedidas en la consigna.
  
  const isInCart = (producto) => {
    /* console.log("producto: ", producto, "cart; ", cart); */
    return cart.findIndex(x => x.id === producto) /* ? console.log("estaba") : console.log("no estaba"); */
   /* cart.map(x => console.log(x)); */
 }
 
 

  const addToCart= (producto, cantidad, precio) => {
      console.log("producto en GlobalContext: ", producto);
      if (isInCart(producto) == -1) {
        const nuevoObj = {
          id: producto,
          cantidad: cantidad,
          precio: precio, 
          precioTotal: (precio * cantidad)
        }
        console.log(nuevoObj);
        setCart([... cart, nuevoObj]); 
        console.log("Nuevo estado del carrito (if):", cart);

      } else {
        const cantNueva = cart[isInCart(producto)].cantidad + cantidad;
        const newArray = [...cart];
        newArray[isInCart(producto)].cantidad = cantNueva;
        /* console.log(newArray); */
        setCart(newArray); 
        /* console.log("Nuevo estado del carrito (else):", cart); */

      }
  }

  const clear = () => setCart([]);






/* AGREGADO AHORA CONSULTA A BASE DE DATOS  */

const [dataProds, setdataProds] = useState([]);

    const getData = async () => {
      const col = collection(db, 'Productos')
      try {
        const data = await getDocs(col)
        const result = data.docs.map(doc => doc = {id: doc.id, ...doc.data()})
        setdataProds(result)
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }


    useEffect(() => {

      getData();
      
    }, [])

  

  return (
      <GlobalContext.Provider value={{cart, setCart, addToCart, clear, cartTotal, cantidadTotal, eliminarProd, dataProds}}>
        {children}
      </GlobalContext.Provider>
  )
}


export default GlobalContextProvider