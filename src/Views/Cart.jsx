import React, { useContext, useEffect } from 'react'
import CartItemList from '../Components/CartItemList/CartItemList';
import Formulario from '../Components/Formulario/Formulario';
import GlobalContextProvider, { GlobalContext } from '../Context/GlobalContextProvider';


const Cart = () => {
    const {cart, addToCart, cartTotal, cantidadTotal, clear} = useContext(GlobalContext);

   


  return (
    <>
    
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
            <div className="d-inline-flex">
                <p className="m-0"><a href="">Home</a></p>
                <p className="m-0 px-2">-</p>
                <p className="m-0">Shopping Cart</p>
                <p className="m-0">Shopping Cart</p>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Cart Start --> */}
    <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
                <table className="table table-bordered text-center mb-0">
                    <thead className="bg-secondary text-dark">
                        <tr>
                            <th>Quesos</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar del carrito</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">

                    <CartItemList data={{cart}}/>
                       
                    </tbody>
                </table>
            </div>
            <div className="col-lg-4">
                {/* <form className="mb-5" action="">
                    <div className="input-group">
                        <input type="text" className="form-control p-4" placeholder="Coupon Code"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary">Apply Coupon</button>
                        </div>
                    </div>
                </form> */}
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Mi Carrito:</h4>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Cantidad de productos:</h6>
                            <h6 className="font-weight-medium">{cantidadTotal}</h6>
                        </div>
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Subtotal:</h6>
                            <h6 className="font-weight-medium">$ {cartTotal}.-</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Costo de Envio:</h6>
                            <h6 className="font-weight-medium">$ 0</h6>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">Total:</h5>
                            <h5 className="font-weight-bold">$ {cartTotal}.-</h5>
                        </div>
                        <Formulario cart={{cart}} cantTotal={{cartTotal}} compra={{cantidadTotal}}/>
                       {/*  <button className="btn btn-block btn-primary my-3 py-3">Terminar mi compra</button> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Cart End --> */}
    
    </>
  )
}

export default Cart