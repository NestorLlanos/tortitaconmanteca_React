import {getProductById} from "../../asyncMock.js"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import classes from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    useEffect(()=>{ 
        getProductById ('1')
        .then (respose => {
            setProduct (respose)
        })
        .catch (error =>{
            console.error(error)
        })
    }, [])
    return(
        <div className={classes.contenedor}>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer