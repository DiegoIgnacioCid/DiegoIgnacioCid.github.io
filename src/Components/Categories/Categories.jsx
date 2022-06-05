import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from "../../Assets/img/nuevas/categorias-estacionado.png"
import img2 from "../../Assets/img/nuevas/categorias-semiduros.png"
import img3 from "../../Assets/img/nuevas/categorias-blandos.jpg"
import "./Categories.css"



const Categories = () => {
  return (
    <>
    {/* <!-- Start Categories of The Month --> */}
    <section className="container py-5">
        <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
                <h1 className="h1">Categorías</h1>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
                <NavLink to={"/Categoria/Estacionados"}><img src={img1} className="rounded-circle img-fluid border"/></NavLink>
                <h5 className="text-center mt-3 mb-3">Estacionados</h5>
                <p className="text-center"><NavLink to={"/Categoria/Estacionados"} className="btn btn-warning head">Tienda</NavLink></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <NavLink to={"/Categoria/Semiduros"}><img src={img2} className="rounded-circle img-fluid border"/></NavLink>
                <h2 className="h5 text-center mt-3 mb-3">Semiduros</h2>
                <p className="text-center"><NavLink to={"/Categoria/Semiduros"} className="btn btn-warning head">Tienda</NavLink></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src={img3} className="rounded-circle img-fluid border"/></a>
                <h2 className="h5 text-center mt-3 mb-3">Blandos</h2>
                <p className="text-center"><NavLink to={"/Categoria/Blandos"} className="btn btn-warning head">Tienda</NavLink></p>
            </div>
        </div>
    </section>
    {/* <!-- End Categories of The Month --> */}

    
    
    </>
  )
}

export default Categories