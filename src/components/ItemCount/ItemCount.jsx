import { useState } from "react"

const ItemCount = (props) =>{
    const [count, setCount] = useState(props.initialValue)

        const decrement = () =>{
            if (count > props.min) {
                setCount (count -1) 
            }
            
        }
        const increment = () =>{
            if (count < props.max) {
                setCount (count +1) 
            }
       }


    return(
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
        </div>

    )
}
export default ItemCount 