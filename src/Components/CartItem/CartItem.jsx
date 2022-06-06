import React, { useContext } from 'react'
import GlobalContextProvider, { GlobalContext } from '../../Context/GlobalContextProvider';


const CartItem = (data) => {

    
    const {eliminarProd, addToCart, cart, cartTotal} = useContext(GlobalContext);
    
    
    data = data.prods;

const handleClick = () => {
    eliminarProd(data.id);
}


const handleClickSuma = () => {
    if (data.cantidad < data.stock) {
        addToCart(data.id, 1, data.precio, data.stock);
    }
    
    
}

const handleClickResta = () => {
    if (data.cantidad > 0) {
        addToCart(data.id, -1, data.precio, data.stock);
    }
    
    
}





  return (
    
<>
<tr>
    <td className="align-middle"><img src="img/product-1.jpg" alt="" style={{width: "50px;"}}/>{data.id}</td>
    <td className="align-middle">$ {data.precio}.-</td>
    <td className="align-middle">
        <div className="input-group quantity mx-auto" style={{width: "100px;"}}>
            <div className="input-group-btn">
                <button onClick={handleClickResta} className="btn btn-sm btn-light btn-minus" >
                <i className="fa fa-minus"></i>
                </button>
            </div>
            <input type="text" className="form-control form-control-sm bg-light text-center" value={data.cantidad}/>
            <div className="input-group-btn">
                <button onClick={handleClickSuma} className="btn btn-sm btn-light btn-plus">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </td>
    <td className="align-middle">$ {data.precio * data.cantidad}</td>
    <td className="align-middle"><button className="btn btn-sm btn-light" onClick={handleClick}><i className="fa fa-times"></i></button></td>
</tr>

</>

  )
}

export default CartItem