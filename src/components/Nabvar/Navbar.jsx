import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.module.css"
import { NavLink, Link } from "react-router-dom"



const Navbar = () =>{
    return(
        <header className={classes.header}>
            <Link to='/' className={classes.tortita}> 
               <h2 >Tortita con Manteca</h2>
            </Link>

            <nav className={classes.nav}>
                <NavLink to={`/category/tortas`} className={classes.a}>Tortas</NavLink>
                <NavLink to={'/category/alfajores'} className={classes.a}>Alfajores</NavLink>
                <NavLink to={'/category/tartas'} className={classes.a}>Tartas</NavLink>
                <NavLink to={'/category/box'} className={classes.a}>Box</NavLink>
            </nav>
            <CartWidget/>     
            
            
        </header>
    )
}
export default Navbar