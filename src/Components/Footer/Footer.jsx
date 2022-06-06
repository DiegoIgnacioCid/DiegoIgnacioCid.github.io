import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"


const Footer = () => {
  return (
    <>
     
    <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
            <div className="row">

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-warning border-bottom pb-3 border-light logo kaseColor">Käse</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            123 Consectetur at ligula 10660
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw"></i>
                            <a className="text-decoration-none" href="tel:010-020-0340">0800-QUESO</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <a className="text-decoration-none" href="mailto:info@company.com">info@kase.com</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Productos</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><NavLink to={"/Categoria/Estacionados"}  className="text-decoration-none" href="#">Estacionados</NavLink></li>
                        <li><NavLink to={"/Categoria/Semiduros"}  className="text-decoration-none" href="#">Semiduros</NavLink></li>
                        <li><NavLink to={"/Categoria/Blandos"}  className="text-decoration-none" href="#">Blandos</NavLink></li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Otra Info</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><NavLink to={"/"} className="text-decoration-none" href="#">Home</NavLink></li>
                        <li><NavLink to={"/Nosotros"} className="text-decoration-none" href="#">Nosotros</NavLink></li>
                        <li><NavLink to={"/Contact"} className="text-decoration-none" href="#">Contacto</NavLink></li>
                    </ul>
                </div>

            </div>

            <div className="row text-light mb-4">
                <div className="col-12 mb-3">
                    <div className="w-100 my-3 border-top border-light"></div>
                </div>
                <div className="col-auto me-auto">
                    <ul className="list-inline text-left footer-icons">
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    </footer>
    </>
  )
}

export default Footer