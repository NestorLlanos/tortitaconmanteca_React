
import classes from "./Item.module.css"
import { Link } from "react-router-dom"


const Item = ({id,name, img, price, stock}) => {
    return(
        <article className={classes.Item}>
            <header>
                <h3>{name}</h3>
            </header>

            <picture>
                <img src={img} alt={name} className={classes.img}/>
            </picture>

            
                <p className={classes.info}>
                Precio: ${price}
                </p>
                <p className={classes.info}>
                Stock: {stock} Un.
                </p>

                

            <footer>
                <Link to = {`/item/${id}`} className= {'btn btn-outline-secondary'} > Ver detalle </Link>
            </footer>
                                
               
        </article>
    )
}
export default Item