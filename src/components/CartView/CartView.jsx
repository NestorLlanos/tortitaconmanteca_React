import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import classes from "./CartView.module.css"


const CartView = () => {
    const { cart, removeItem, total,} = useContext(CartContext)

    const vaciarCarrito = () => {
        
        cart.forEach((prod) => {
          removeItem(prod.id);
        });
      };

    return (
        <div className={classes.contenedor}>
            <h1 className="classes.titulo">Tus compras</h1>
            <section>
            {
                cart.map(prod => {
                    return (
                        <div>
                            <section key={prod.id} className={classes.sectionDiv}>
                            <img src={prod.img} alt="" />
                            <p >{prod.name}</p>
                            <p > $ {prod.price}</p>                            
                            <p >Cantidad {prod.quantity}</p>
                            <button onClick={() => removeItem(prod.id)} className= {'btn btn-danger'} >Eliminar</button>                          
                
                            </section>                            
                        </div>
                        
                    )
                })
            }
            </section>   
            <h2>Total a pagar: ${total}</h2>         
            <div>
                <Link className= {'btn btn-secondary'} to="/checkout">Avanzar con la compra</Link>
                <button className= {'btn btn-secondary'} onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    )
}
export default CartView