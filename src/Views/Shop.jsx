import React, { useContext } from 'react'
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
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                            Todos nuestros quesos
                            <i className="fa fa-fw fa-chevron-circle-right mt-1"></i>
                        </a>
                        {/* <ul className="collapse show list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#">Men</a></li>
                            <li><a className="text-decoration-none" href="#">Women</a></li>
                        </ul> */}
                    </li>
                    <li className="pb-3">
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                            Estacionados
                            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        {/* <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#">Sport</a></li>
                            <li><a className="text-decoration-none" href="#">Luxury</a></li>
                        </ul> */}
                    </li>
                    <li className="pb-3">
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                            Semiduros
                            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        {/* <ul id="collapseThree" className="collapse list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#">Bag</a></li>
                            <li><a className="text-decoration-none" href="#">Sweather</a></li>
                            <li><a className="text-decoration-none" href="#">Sunglass</a></li>
                        </ul> */}
                    </li>
                    <li className="pb-3">
                        <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                            Otros
                            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        {/* <ul id="collapseThree" className="collapse list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#">Bag</a></li>
                            <li><a className="text-decoration-none" href="#">Sweather</a></li>
                            <li><a className="text-decoration-none" href="#">Sunglass</a></li>
                        </ul> */}
                    </li>
                </ul>
            </div>

            <div className="col-lg-9">
               {/*  <div className="row">
                    <div className="col-md-6">
                        <ul className="list-inline shop-top-menu pb-3 pt-1">
                            <li className="list-inline-item">
                                <a className="h3 text-dark text-decoration-none mr-3" href="#">All</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="h3 text-dark text-decoration-none mr-3" href="#">Men's</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="h3 text-dark text-decoration-none" href="#">Women's</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="d-flex">
                            <select className="form-control">
                                <option>Featured</option>
                                <option>A to Z</option>
                                <option>Item</option>
                            </select>
                        </div>
                    </div>
                </div> */}




                <div className="row">

{/* A PARTIR DE ACA VIENEN LOS ITEMS */}
                    
                    
                    <ItemList data={dataProds}/>
                    
                   


                </div>
                <div div="row">
                    <ul className="pagination pagination-lg justify-content-end">
                        <li className="page-item disabled">
                            <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabindex="-1">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                        </li>
                    </ul>
                </div>




            </div>

        </div>
    </div>
    {/* <!-- End Content --> */}

    
    </>
  )
}

export default Shop