import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../Views/Cart'
import Categorias from '../Views/Categorias'
import Contact from '../Views/Contact'
import Error from '../Views/Error'
import Home from '../Views/Home'
import Nosotros from '../Views/Nosotros'
import Shop from '../Views/Shop'
import ShopDetail from '../Views/ShopDetail'
import Layout from './Layout'

const Rutas = () => {
  return (
    <>
    
    <BrowserRouter>
    
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
                  <Route path="/Categoria/:Categoriaid" element={<Categorias/>}/> 
                  <Route path="/Nosotros" element={<Nosotros/>}/>
                  <Route path="/Shop" element={<Shop/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                  <Route path="/Cart" element={<Cart/>}/>
                  <Route path="/ShopDetail/:id" element={<ShopDetail/>}/>
                  <Route path="*" element={<Error/>}/>
                  
            </Route>

        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rutas