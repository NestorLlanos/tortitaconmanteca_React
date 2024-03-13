import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"
import { useState } from "react"



const ItemDetail =({id, name, price, category, img, stock, description}) => {
const [quantity, setQuantity] = useState(0)


const handLeOnadd = (quantity) => {
    console.log('Cantidad del producto: ' + quantity)
    setQuantity(quantity)
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
           {quantity === 0 ? <ItemCount stock={stock} onAdd={handLeOnadd}/> : <button className= {'btn btn-outline-secondary'}> Finalizar compra</button> }
        </article>
    )

}
export default ItemDetail 