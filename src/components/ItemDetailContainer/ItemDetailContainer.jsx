import { getDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import classes from "./ItemDetailContainer.module.css"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig.js"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            toast.error ('Error al cargar productos')
        })
    }, [itemId])
    return(
        <main className={classes.contenedor}>
            <h1 className={classes.detalle}>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer