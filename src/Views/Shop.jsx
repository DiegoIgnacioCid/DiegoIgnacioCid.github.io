import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import ItemList from '../Components/ItemList/ItemList';
import GlobalContextProvider, { GlobalContext } from '../Context/GlobalContextProvider';






const Shop = () => {

    const {dataProds} = useContext(GlobalContext);

    console.log(dataProds)

  return (
    <>
    
    {/* <!-- Start Content --> */}
    <div className="container py-5">
        <div className="row">

            <div className="col-lg-3">
                <h1 className="h2 pb-4">Categorías</h1>
                <ul className="list-unstyled templatemo-accordion">
                    <li className="pb-3">
                        <NavLink to={"/Shop"}  className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                            Todos nuestros quesos
                            <i className="fa fa-fw fa-chevron-circle-right mt-1"></i>
                        </NavLink>
                    </li>
                    <li className="pb-3">
                        <NavLink to={"/Categoria/Estacionados"}  className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                            Estacionados
                            <i className="pull-right fa fa-fw fa-chevron-circle-right mt-1"></i>
                        </NavLink>
                    </li>
                    <li className="pb-3">
                        <NavLink to={"/Categoria/Semiduros"}  className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                            Semiduros
                            <i className="pull-right fa fa-fw fa-chevron-circle-right mt-1"></i>
                        </NavLink>
                    </li>
                    <li className="pb-3">
                        <NavLink to={"/Categoria/Blandos"}  className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                            Blandos
                            <i className="pull-right fa fa-fw fa-chevron-circle-right mt-1"></i>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="col-lg-9">

                <div className="row">

{/* A PARTIR DE ACA VIENEN LOS ITEMS */}
                    
                    
                    <ItemList data={dataProds}/>

                </div>

            </div>

        </div>
    </div>
    {/* <!-- End Content --> */}

    
    </>
  )
}

export default Shop