import {useState } from "react"
import classes from "./ItemCount.module.css"

const ItemCount = ({stock, initial= 1, onAdd}) =>{
    const [count, setCount] = useState(initial)

            
        const increment = () =>{
            if (count < stock) {
                setCount (prev => prev +1) 
            }
       }

       const decrement = () =>{
        if (count > 1) {
            setCount (prev =>prev -1) 
        }
        
    }


    return(
        <article className={classes.count}>
            <h4>{count}</h4>          
            <button className= {'btn btn-outline-secondary'}  onClick={decrement}>-</button>                            
            <button className= {'btn btn-outline-secondary'}   onClick={()=> onAdd(count)} disabled = {!stock}>
            Agregar al carrito </button>            
            <button className= {'btn btn-outline-secondary'}   onClick={increment}>+</button>
        </article>

    )
}
export default ItemCount 