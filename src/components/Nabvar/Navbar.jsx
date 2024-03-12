import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.module.css"
import { NavLink, Link } from "react-router-dom"



const Navbar = () =>{
    return(
        <header className={classes.header}>
            <Link to='/'> 
               <h3 className={classes.h2}>Tortita con Manteca</h3>
            </Link>

            <nav className={classes.nav}>
                <Link to='/category/Tortas' >Tortas</Link>
                <Link to={'/category/Alfajores'} >Alfajores</Link>
                <Link to={'/category/Tartas'} >Tartas</Link>
                <Link to={'/category/Box'}>Box</Link>
            </nav>
            <CartWidget/>     
            
            
        </header>
    )
}
export default Navbar