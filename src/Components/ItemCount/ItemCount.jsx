import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import GlobalContextProvider, { GlobalContext } from '../../Context/GlobalContextProvider';


const ItemCount = ({prod}) => {


    const {cart, addToCart} = useContext(GlobalContext);

    

    const isInCart = (producto) => {
        return cart.findIndex(x => x.id === producto); 
     }
     
    let contInicial = 0; 


    /* Esto es para que el contador tome el valor del item en el carro si es que ya hay, para que respete tope de stock */
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
        addToCart(prod.id, contador, prod.Precio, prod.Stock);
    }
    



  return (
    
    <>
    <div className="row">
        <div className="col-auto">
            <ul className="list-inline pb-3">
                <li className="list-inline-item text-right">
                    Cantidad
                </li>
                <li className="list-inline-item"><button className="btn btn-warning"  disabled={disable} onClick={restar}>-</button></li>
                <li className="list-inline-item"><span className="badge bg-warning">{contador}</span></li>
                <li className="list-inline-item"><button className="btn btn-warning"  disabled={disable} onClick={sumar}>+</button></li>
            </ul>
        </div>
    </div>

    <div className="row pb-3">
        <div className="col d-grid">
            <NavLink to={"/Cart"} className="navbar-brand nav-link">
                <button type="submit" className="btn btn-warning btn-lg" name="submit" value="buy">Terminar compra.</button>
            </NavLink>
        </div>
        <div className="col d-grid">
            <button type="submit" className="btn btn-warning btn-lg" name="submit" value="addtocard" disabled={disable} onClick={handleAgregarCarrito}>Agregar al carrito</button>
        </div>
    </div>

    </>
    )
}
export default ItemCount