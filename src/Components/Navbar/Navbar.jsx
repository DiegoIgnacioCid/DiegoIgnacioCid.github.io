import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import GlobalContextProvider, { GlobalContext } from '../../Context/GlobalContextProvider';
import "./Navbar.css"
import "../../Assets/css/bootstrap.min.css"

const Navbar = () => {

    const {cantidadTotal} = useContext(GlobalContext);


  return (
    <>
 
    
    <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
                <div>
                    <i className="fa fa-envelope mx-2"></i>
                    <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">info@kase.com</a>
                    <i className="fa fa-phone mx-2"></i>
                    <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                </div>
                <div>
                    <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                    <a className="text-light" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                    <a className="text-light" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                    <a className="text-light" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw"></i></a>
                </div>
            </div>
        </div>
    </nav>
    {/* <!-- Close Top Nav --> */}


    {/* <!-- Header --> */}
    <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">

            <NavLink to={"/"} className="navbar-brand text-success logo h1 align-self-center" id='logo'>
                Käse
            </NavLink>

            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div className="flex-fill">
                    <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link">Käse</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/Shop"} className="nav-link">Tienda</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/Nosotros"} className="nav-link">Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/Contact"} className="nav-link">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar align-self-center d-flex">
                    <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div className="input-group">
                            <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..."/>
                            <div className="input-group-text">
                                <i className="fa fa-fw fa-search"></i>
                            </div>
                        </div>
                    </div>
                 {/*    <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                        <i className="fa fa-fw fa-search text-dark mr-2"></i>
                    </a> */}
                    <NavLink to={"/Cart"} className="nav-icon position-relative text-decoration-none" href="#">
                        <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{cantidadTotal}</span>
                    </NavLink>
                    {/* <a className="nav-icon position-relative text-decoration-none" href="#">
                        <i className="fa fa-fw fa-user text-dark mr-3"></i>
                        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                    </a> */}
                </div>
            </div>

        </div>
    </nav>
    
    </>
  )
}

export default Navbar