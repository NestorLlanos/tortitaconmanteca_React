
import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"
import { useState, useContext} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ItemDetail =({id, name, price, category, img, stock, description}) => {
const [quantity, setQuantity] = useState(0)
const {addItem} = useContext (CartContext)


const handLeOnadd = (quantity) => {
    const objProductToAdd = {
        id, name, price, quantity
    }

    toast.success (`Se agregó correctamente ${quantity} ${name}`)
    
    setQuantity(quantity)
    addItem(objProductToAdd)
}

    return(
        <article className={classes.Item}>
            <header>
                <h3>{name}</h3>
            </header>

            <picture>
                <img src={img} alt={name} className={classes.img}/>
            </picture>

            <section>
                <p className={classes.info}> Categoria: {category}</p>
                <p className={classes.info}> Descripción: {description}</p>
                <p className={classes.info}> Precio: ${price}</p>                
            </section>                                           
           {quantity === 0 ? <ItemCount stock={stock} onAdd={handLeOnadd}/> : <Link to='/cart' className= {'btn btn-outline-secondary'}> Finalizar compra</Link> }
        </article>
    )

}
export default ItemDetail 