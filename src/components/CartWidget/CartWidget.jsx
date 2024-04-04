import cart from "../../assets/cart.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () =>{

    const {totalQuantity} = useContext(CartContext)
    return (
        <Link to= '/cart' style = {{color:'black', textDecoration:'none'}}>
            <img src= {cart} alt="cart-widget"  />
            {totalQuantity}
        </Link>
    )
} 
export default CartWidget 