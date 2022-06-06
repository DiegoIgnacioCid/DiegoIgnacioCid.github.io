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
                                <ItemCount prod={prodElegidoF}/>

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