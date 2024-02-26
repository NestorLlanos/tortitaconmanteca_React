import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.module.css"
// import ImagenHeader from "../../assets/header2.png"


const Navbar = () =>{
    return(
        <header className={classes.header}>
            {/* <img src={ImagenHeader} alt="" className={classes.ImagenHeader}/>        */}
            <h2 className={classes.h2}>Tortita con Manteca</h2>     
            <nav className={classes.nav}>
            
                <a className={classes.a}>Tortas</a>
                <a className={classes.a}>Alfajores</a>
                <a className={classes.a}>Tartas</a>
                <a className={classes.a}>Box</a>
                <CartWidget/>
                        
            </nav>
            
        </header>
    )
}
export default Navbar