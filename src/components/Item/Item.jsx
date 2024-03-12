
import classes from "./Item.module.css"


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
                <link to = {`/item/${id}`} className= {'btn btn-outline-secondary'} > Ver detalle </link>
            </footer>
                                
               
        </article>
    )
}
export default Item