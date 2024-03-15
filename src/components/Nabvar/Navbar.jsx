import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.module.css"
import {Link } from "react-router-dom"
import logo from "../../assets/logo Tortita con manteca.png"


const Navbar = () =>{
    return(
        <header className={classes.header}>
            <Link to='/' >               
               <img src={logo} alt="Logo Tortita con Manteca" className={classes.logo}/>
            </Link>

            <nav className={classes.nav}>
                <Link to ='/category/tortas' className={classes.a}>Tortas</Link>
                <Link to='/category/alfajores' className={classes.a}>Alfajores</Link>
                <Link to='/category/tartas' className={classes.a}>Tartas</Link>
                <Link to='/category/box' className={classes.a}>Box</Link>
            </nav>
            
            <CartWidget/> 
            
                
            
            
        </header>
    )
}
export default Navbar