import cart from "../../assets/cart.png"
import { Link } from "react-router-dom"

const CartWidget = () =>{
    return (
        <Link to= '/cart' style = {{color:'black', textDecoration:'none'}}>
            <img src= {cart} alt="cart-widget"  />
            0
        </Link>
    )
} 
export default CartWidget 