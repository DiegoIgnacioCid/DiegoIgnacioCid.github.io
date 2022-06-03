import React, { useState, useEffect } from 'react'
import { getDocs, collection, getFirestore, query, where } from "firebase/firestore";
import ItemList from '../../Components/ItemList/ItemList';
import "./ProdMes.css"

const ProdMes = () => {

  
    const [dataProds, setdataProds] = useState([]);
  
    /* LO QUE SIGUE ES PARA FILTRAR LAS CATEGORIAS DESDE LA BASE DE DATOS */
    const getData2 = async () => {
      try {
        const db = getFirestore();
  
      const q = query(collection(db, "Productos"), where("Oferta", "==", true));
      await getDocs(q).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("no data")
        } else {
          setdataProds(snapshot.docs.map(doc => doc = {id: doc.id, ...doc.data()}));
          console.log(snapshot);
        }
      })
      } catch (error) {
        console.log(error)
      }
  
  
    };
  
  
    useEffect(() => {
      getData2();    
    }, [])




  return (
    <>


<div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
                <h1 className="h1">Ofertas del mes.</h1>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    <div className="container py-5">
        <div className="row">
            <ItemList data={dataProds}/>
                    
        </div>
    </div>

    
    </>
  )
}

export default ProdMes