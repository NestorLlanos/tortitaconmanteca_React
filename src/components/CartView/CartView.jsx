import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import classes from "./CartView.module.css"


const CartView = () => {
    const { cart, removeItem } = useContext(CartContext)

    return (
        <div className={classes.contenedor}>
            <h1>Tu carrito de compras</h1>
            <section>
            {
                cart.map(prod => {
                    return (
                        <article key={prod.id} className={classes.cart}>
                            <h3>{prod.quantity} - {prod.name}</h3>
                            <button onClick={() => removeItem(prod.id)} className= {'btn btn-danger'} >X</button>
                        </article>
                    )
                })
            }
            </section>
            <div>
                <Link to='/checkout' className= {'btn btn-secondary'}>Avanzar con la compra</Link>
            </div>
            
        </div>
    )
}
export default CartView