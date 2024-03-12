import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"



const ItemDetail =({id, name, price, category, img, stock, description}) => {
const handLeOnadd = (cuantity) => {
    console.log('Cantidad del producto: ' + cuantity)
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
            <ItemCount stock={stock} onAdd={handLeOnadd}/>
        </article>
    )

}
export default ItemDetail 