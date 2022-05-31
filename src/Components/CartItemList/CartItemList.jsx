import React from 'react'
import CartItem from '../CartItem/CartItem'

const CartItemList = (data) => {
   
    const datos = data.data.cart;
    console.log(datos);
    console.log(datos.length);
   
  return (
      <>
   
        {datos.length > 0 ? datos.map((prod) => <CartItem key={prod.id} prods={prod}/>) : <h3>El carrito esta vacio</h3>}

      </>
  )
}

export default CartItemList