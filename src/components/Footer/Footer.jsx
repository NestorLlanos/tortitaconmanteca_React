import classes from "./Footer.module.css"

const Footer = () =>{
    
    return (
        <footer className={classes.footer}>  
            <div >
                <p className={classes.parrafo}> Desarrollado por <strong><span>Nestor Llanos </span></strong> &copy; Copyright <strong><span>Tortita con Manteca</span></strong>.</p>

            </div>

        </footer>  

    )
}

export default Footer