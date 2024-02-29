import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"

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

//Función transformadora:

    

    return(
        <div>
            <h1>{greeting} </h1>
            {products.map (product => {
        return(
            <div>
                <h2>{product.name}</h2>
                <img src={product.img} alt="" style={{width:100}}/>
                <h3>Precio: ${product.price}</h3>
            </div>
        )
    })}
    
        </div>        

    )
}
export default ItemListContainer