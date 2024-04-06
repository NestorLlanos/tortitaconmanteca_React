import { getDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import classes from "./ItemDetailContainer.module.css"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig.js"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    const {itemId} = useParams ()


    useEffect(()=>{ 
        const productDoc = doc (db, 'products', itemId)
        
        getDoc(productDoc)
           .then(queryDocumentSnaphot => {
            const data = queryDocumentSnaphot.data()
            const productAdapted = {id: queryDocumentSnaphot.id, ...data}
            setProduct(productAdapted)
           })
        
        .catch (error =>{
            console.error(error)
        })
    }, [itemId])
    return(
        <main className={classes.contenedor}>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer