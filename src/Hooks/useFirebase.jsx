import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import db from '../Service/Firebase'

const useFirebase = () => {
  
  
  const fetchGenerateTicket = async ([datos]) => {

    try {
        const col = collection(db, "ordenes")
        const order = await addDoc(col, datos)
        console.log(order.id)

    } catch (error) {
        console.log(error);
    }


  }
  
  
  
  
  
    return (
    <div>useFirebase</div>
  )
}

export default useFirebase