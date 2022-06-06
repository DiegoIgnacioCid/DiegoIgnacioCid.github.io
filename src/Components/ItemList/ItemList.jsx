import React from 'react'
import Cargando from '../Cargando/Cargando'
import Item from '../Item/Item'

const ItemList = (data) => {


  return (
    <>
    {/* Renderizado condicional. Si data viene con contenido renderiza los items, de lo contrario renderiza cargando */}
    {data.data.length > 0 ? data.data.map((prod) => <Item key={prod.id} prods={prod}/>) : <Cargando/>}
    </>
  )
}

export default ItemList