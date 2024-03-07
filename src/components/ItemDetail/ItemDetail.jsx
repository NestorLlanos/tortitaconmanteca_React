import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"



const ItemDetail =({id, name, price, category, img, stock, description}) => {
    return(
        <article className={classes.Item}>
            <header>
                <h3>{name}</h3>
            </header>

            <picture>
                <img src={img} alt={name} className={classes.img}/>
            </picture>

            <section>
                <p className={classes.info}>
                Precio: {category}
                </p>
                <p className={classes.info}>
                Precio: {description}
                </p>
                <p className={classes.info}>
                Precio: ${price}
                </p>
                
            </section>                                           
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
        </article>
    )

}
export default ItemDetail 