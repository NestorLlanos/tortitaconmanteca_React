import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import classes from "./ItemListContainer.module.css"


const ItemListContainer = ({greeting}) =>{
    const [products, setProduct] = useState ([])

    useEffect (()=>{
        getProducts()
        .then(result =>{
            setProduct(result)        
        })
        .catch (error =>{
            console.log(error)
        })
    }, [])

    return(
        <div className={classes.contenedor}>
            <h1>{greeting} </h1>
            <ItemList products={products}/>
    
        </div>        

    )
}
export default ItemListContainer