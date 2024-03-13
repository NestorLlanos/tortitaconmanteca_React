import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import classes from "./ItemListContainer.module.css"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect (()=>{
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)

        .then(result =>{
            setProducts(result)        
        })
        .catch (error =>{
            console.log(error)
        })
        .finally (()=>{
            setLoading(false)
        })
    }, [categoryId])
    
    if (loading){
        return <h2>Cargando productos...</h2>
    }

    return(
        <div className={classes.contenedor}>
            <h2 className={classes.contenedor}>{greeting} </h2>
            <ItemList products={products}/>
    
        </div>        

    )
}
export default ItemListContainer