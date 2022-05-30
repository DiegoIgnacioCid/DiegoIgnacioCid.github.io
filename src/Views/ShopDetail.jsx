import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from '../Components/ItemCount/ItemCount';
import GlobalContextProvider, { GlobalContext } from '../Context/GlobalContextProvider';



const ShopDetail = () => {

    const params = useParams();
    console.log(params.id);
    const {dataProds} = useContext(GlobalContext);
    console.log(dataProds);

    const prodElegido = (dataProds.filter(x => x.id == params.id));
    console.log(prodElegido);
    const prodElegidoF = prodElegido[0]; // porque el filter devuelve un array con un objeto entonces el objeto est[a en el indice 0 del array]


  return (
    <>
    
    
    {/* <!-- Open Content --> */}
    <section className="bg-light">
        <div className="container pb-5">
            <div className="row">
                <div className="col-lg-5 mt-5">
                    <div className="card mb-3">
                        <img className="card-img img-fluid" src={prodElegidoF.Img} alt="Card cap" id="product-detail"/>
                    </div>
                    <div className="row">
                        {/* <!--Start Controls--> */}
                        
                  {/*       <!--End Controls-->
                        <!--Start Carousel Wrapper--> */}
                        
                       {/*  <!--End Carousel Wrapper-->*/}

                       {/*  <!--Start Controls-->  */}
                       
                     {/*    <!--End Controls--> */}
                    </div>
                </div>
               {/*  <!-- col end --> */}
                <div className="col-lg-7 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="h2">{prodElegidoF.Text}</h1>
                            <p className="h3 py-2">$25.00</p>
                            <p className="py-2">
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-secondary"></i>
                                {/* <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span> */}
                            </p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h6>Marca:</h6>
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted"><strong>A granel.</strong></p>
                                </li>
                            </ul>

                            <h6>Características:</h6>
                            <p>{prodElegidoF.Text2}</p>
                          {/*   <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h6>Avaliable Color :</h6>
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted"><strong>White / Black</strong></p>
                                </li>
                            </ul> */}

                            {/* <h6>Specification:</h6>
                            <ul className="list-unstyled pb-3">
                                <li>Lorem ipsum dolor sit</li>
                                <li>Amet, consectetur</li>
                                <li>Adipiscing elit,set</li>
                                <li>Duis aute irure</li>
                                <li>Ut enim ad minim</li>
                                <li>Dolore magna aliqua</li>
                                <li>Excepteur sint</li>
                            </ul> */}

                           {/*  <form action="" method="GET"> */}
                                {/* <input type="hidden" name="product-title" value="Activewear"/> */}
                                <ItemCount prod={prodElegidoF}/>
                               {/*  <div className="row"> */}
                                   {/*  <div className="col-auto">
                                        <ul className="list-inline pb-3">
                                            <li className="list-inline-item">Size :
                                                <input type="hidden" name="product-size" id="product-size" value="S"/>
                                            </li>
                                            <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                                            <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                                            <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                                            <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                                        </ul>
                                    </div> */}
                                 {/*    <div className="col-auto">
                                        <ul className="list-inline pb-3">
                                            <li className="list-inline-item text-right">
                                                Cantidad
                                                <input type="hidden" name="product-quanity" id="product-quanity" value="1"/>
                                            </li>
                                            <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                            <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                                            <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col d-grid">
                                        <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Comprar</button>
                                    </div>
                                    <div className="col d-grid">
                                        <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard">Agregar al carrito</button>
                                    </div>
                                </div> */}



                           {/*  </form>
 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Close Content --> */}
    

    
    
    </>
  )
}

export default ShopDetail