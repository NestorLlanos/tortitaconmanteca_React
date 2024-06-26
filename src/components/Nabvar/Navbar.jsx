import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.module.css"
import {Link, useNavigate } from "react-router-dom"
import logo from "../../assets/logo Tortita con manteca.png"

import { useState } from "react"



const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false)

    
    return(
        <div>
            <div className={classes.navbar}>            
            <Link to='/' >               
               <img src={logo} alt="Logo Tortita con Manteca" className={classes.nav_logo}/>
            </Link>
            <div className={`${classes.nav_items} ${isOpen && classes.open}`}>            
                <Link to ='/category/tortas' >Tortas</Link>
                <Link to='/category/alfajores'>Alfajores</Link>
                <Link to='/category/tartas'>Tartas</Link>
                <Link to='/category/box'>Box</Link> 
            </div>
            <div className={`${classes.nav_toggle} ${isOpen && classes.open}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <CartWidget/>
        </div>
        </div>
    )
}
export default Navbar