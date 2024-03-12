import { useState } from "react"
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
            <button className= {'btn btn-outline-secondary'} style={{marginRight: 10}} onClick={decrement}>-</button>
                                
            <div className={classes.add}>
                <button className= {'btn btn-outline-secondary'}  style={{marginLeft: 10}} onClick={()=> onAdd(count)} disabled = {!stock}>
                    Agregar al carrito
                </button>
            </div>
            <button className= {'btn btn-outline-secondary'}  style={{marginLeft: 10}} onClick={increment}>+</button>
        </article>

    )
}
export default ItemCount 