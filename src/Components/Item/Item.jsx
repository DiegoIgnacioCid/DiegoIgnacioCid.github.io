import React from 'react'
import { Link } from 'react-router-dom'

const Item = (data) => {

   /*  console.log("item data ", data) */
  return (
    <>
    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src={data.prods.Img}/>
                                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul className="list-unstyled">
                                        <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                        <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                        <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                <Link to={`/ShopDetail/${data.prods.id}`} className="h3 text-decoration-none">{data.prods.id}</Link>
                                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li>{data.prods.Text}</li>
                                    <li className="pt-2">
                                       
                                    </li>
                                </ul>
                                <ul className="list-unstyled d-flex justify-content-center mb-1">
                                    <li>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-warning fa fa-star"></i>
                                        <i className="text-muted fa fa-star"></i>
                                    </li>
                                </ul>
                                <p className="text-center mb-0">$ {data.prods.Precio}.-</p>
                            </div>
                        </div>
                    </div>
    
    </>
  )
}

export default Item