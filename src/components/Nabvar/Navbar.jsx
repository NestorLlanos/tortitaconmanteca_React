import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.module.css"
import {Link } from "react-router-dom"
import logo from "../../assets/logo Tortita con manteca.png"
import {FaBars} from "react-icons/fa6";


const Navbar = () =>{
    return(
        <header className={classes.header}>
            <div className={classes.container}></div>
            <Link to='/' >               
               <img src={logo} alt="Logo Tortita con Manteca" className={classes.logo}/>
            </Link>

            <nav className={classes.nav}>
                <Link to ='/category/tortas' className={classes.navLink}>Tortas</Link>
                <Link to='/category/alfajores' className={classes.navLink}>Alfajores</Link>
                <Link to='/category/tartas' className={classes.navLink}>Tartas</Link>
                <Link to='/category/box' className={classes.navLink}>Box</Link>
            </nav>
            
            <CartWidget/> 
            <button className={classes.mobileIcon}></button>     
            <FaBars />
        </header>
    )
}
export default Navbar