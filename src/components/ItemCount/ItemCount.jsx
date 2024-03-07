import { useState } from "react"
import classes from "./ItemCount.module.css"

const ItemCount = ({stock, initial, onAdd}) =>{
    const [quantity, setQuantity] = useState(initial)

        
        const increment = () =>{
            if (quantity < stock) {
                setQuantity (quantity +1) 
            }
       }

       const decrement = () =>{
        if (quantity > 1) {
            setQuantity (quantity -1) 
        }
        
    }


    return(
        <div className={classes.count}>
                       
            <button className= {'btn btn-outline-secondary'} style={{marginRight: 10}} onClick={decrement}>-</button>
            <h4>{quantity}</h4>
            <button className= {'btn btn-outline-secondary'}  style={{marginLeft: 10}} onClick={increment}>+</button>
        
            <div className={classes.add}>
                <button className= {'btn btn-outline-secondary'}  style={{marginLeft: 10}} onClick={()=> onAdd(quantity)} disabled = {!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>

    )
}
export default ItemCount 