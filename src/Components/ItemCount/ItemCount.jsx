import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import GlobalContextProvider, { GlobalContext } from '../../Context/GlobalContextProvider';


const ItemCount = ({prod}) => {


    const {cart, addToCart} = useContext(GlobalContext);

    

    const isInCart = (producto) => {
        return cart.findIndex(x => x.id === producto); 
     }
     
    let contInicial = 0; 

    if (isInCart(prod.id) == -1) {
        contInicial = 0; 

      } else {
        contInicial = cart[isInCart(prod.id)].cantidad;

      }

    const [contador, setContador] = useState(contInicial);
    
    

    const [disable, setDisable] = useState(false);

    console.log("cart en Itemcount: ", cart);
    console.log("prod en Itemcount: ", prod);


    const stock = prod.Stock;
    console.log(prod);
    console.log(stock)
    console.log(typeof stock)


    
    function sumar() {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    
    function restar() {
        
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    const handleAgregarCarrito = () => {
        setDisable(true);
        addToCart(prod.id, contador, prod.Precio);
    }
    



  return (
    
    <>
    <div className="row">
        <div className="col-auto">
            <ul className="list-inline pb-3">
                <li className="list-inline-item text-right">
                    Cantidad
                    {/* <input type="hidden" name="product-quanity" id="product-quanity" value="1"/> */}
                </li>
                <li className="list-inline-item"><button className="btn btn-success"  disabled={disable} onClick={restar}>-</button></li>
                <li className="list-inline-item"><span className="badge bg-secondary">{contador}</span></li>
                <li className="list-inline-item"><button className="btn btn-success"  disabled={disable} onClick={sumar}>+</button></li>
            </ul>
        </div>
    </div>

    <div className="row pb-3">
        <div className="col d-grid">
            <NavLink to={"/Cart"} className="navbar-brand nav-link">
                <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Terminar compra.</button>
            </NavLink>
        </div>
        <div className="col d-grid">
            <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard" disabled={disable} onClick={handleAgregarCarrito}>Agregar al carrito</button>
        </div>
    </div>



    {/* <p>Stock actual: {stock}</p> */}
   {/*  <div>
        <button className="btn btn-success my-4" disabled={disable} onClick={restar}> - </button>
        <span className='span'>{contador}</span>
        <button className="btn btn-success my-4" disabled={disable} onClick={sumar}> + </button>
        <br />
        <button className="btn btn-success my-4" disabled={disable} onClick={handleAgregarCarrito}>Agregar al carrito.</button>
        <NavLink to={"/Cart"} className="navbar-brand nav-link">
        <button className="btn btn-success my-4">Terminar mi compra.</button>
        </NavLink>
    </div> */}
    </>
    )
}
export default ItemCount