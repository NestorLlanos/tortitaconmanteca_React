import {getProductsById} from "../../asyncMock.js"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import classes from "./ItemDetailContainer.module.css"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    const {itemId} = useParams ()


    useEffect(()=>{ 
        getProductsById ({itemId})
        .then (resulte => {
            setProduct (resulte)
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