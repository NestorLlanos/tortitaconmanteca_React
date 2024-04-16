import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import classes from "./ItemListContainer.module.css"
import { useParams } from "react-router-dom"
import { getDocs, collection, query,where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect (()=>{
        const productsCollection = categoryId ? (query(collection (db, 'products'), where('category', '==', categoryId))
    ):(collection(db, 'products'))

        getDocs(productsCollection)
           .then(querySnapshot=>{
            const productsAdapted = querySnapshot.docs.map(doc => {
                const data =doc.data ()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
           })
           .catch( error => {'hubo un error cargando los productos'})


        .finally (()=>{
            setLoading(false)
        }) 
    }, [categoryId])
    
    if (loading){
        return <h2>Cargando productos...</h2>
    }

    return(
        <div className={classes.contenedor}>
            <h2 className={classes.saludo}>{greeting} </h2>
            <ItemList products={products}/>
    
        </div>        

    )
}
export default ItemListContainer