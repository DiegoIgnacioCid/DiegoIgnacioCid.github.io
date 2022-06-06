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
    console.log("indexprod", indexProd);
    console.log("copiaArray", copiaArray); 
    copiaArray.splice(indexProd, 1);
    console.log("copiaArray",  copiaArray);
    console.log("nuevo cart", cart); 
    setCart(copiaArray);
    contadorTotal(); 
    contadorCantTotal();
 }

  /* Cuando cambie "cart", se disparan las funciones que cuentan los items y valores en el cart */
  useEffect(() => {
    contadorTotal(); 
    contadorCantTotal();
    
  }, [cart])
  
  // las funciones pedidas en la consigna.
  
  /* Detecta si el producto ya esta en el carrito, en ese caso pasa indica. Caso contrario pasa -1 */
  const isInCart = (producto) => {
    return cart.findIndex(x => x.id === producto) 
 }
 
 
/* Funci[on que agrega contenido al carrito. Si el producto no estaba, crea el objeto, lo puebla con lso datos y lo agrega. Si ya estaba, actualiza cantidad y precio] */
  const addToCart= (producto, cantidad, precio, stock) => {
      
      if (isInCart(producto) == -1) {
        const nuevoObj = {
          id: producto,
          cantidad: cantidad,
          stock: stock,
          precio: precio, 
          precioTotal: (precio * cantidad)
        }
        setCart([... cart, nuevoObj]); 

      } else {
        const cantNueva = cart[isInCart(producto)].cantidad + cantidad;
        const precioTotNuevo = cart[isInCart(producto)].precioTotal + (precio * cantidad);
        const newArray = [...cart];
        newArray[isInCart(producto)].cantidad = cantNueva;
        newArray[isInCart(producto)].precioTotal = precioTotNuevo;
        setCart(newArray); 

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