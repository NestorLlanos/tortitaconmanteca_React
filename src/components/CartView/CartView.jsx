import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import classes from "./CartView.module.css"
import { BoxIconElement } from "boxicons"



const CartView = () => {
    const { cart, removeItem, total} = useContext(CartContext)

    const vaciarCarrito = () => {
        
        cart.forEach((prod) => {
          removeItem(prod.id);
          
        });        
      };
      console.log(cart)
    return (
        <div className={classes.contenedor}>
            <h1 className={classes.titulo}>Tus compras</h1>
            <section>
            {
                cart.map((prod) => {
                    return (
                        <div key={prod.id}>
                            <div  className={classes.sectionDiv}>
                            <img src={prod.img} alt={prod.name} className={classes.imgView}/>
                            <p >{prod.name}</p>
                            <p > $ {prod.price}</p>                            
                            <p >Cantidad {prod.quantity}</p>
                            <box-icon type='solid' name='trash' onClick={() => removeItem(prod.id)}></box-icon>                                         
                
                            </div>                            
                        </div>
                        
                    )
                })
            }
            </section>   
            <h2>Total a pagar: ${total}</h2>         
            <div className= {classes.btnContainer }>
                <button className= {'btn btn-secondary'} onClick={vaciarCarrito}>Vaciar Carrito</button>
                <Link className= {'btn btn-secondary'} to="/checkout">Avanzar</Link>                
            </div>
        </div>
    )
}
export default CartView