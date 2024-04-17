import classes from "./Footer.module.css"

const Footer = () =>{
    
    return (
        <footer className={classes.footer}>  
            {/* <div>
                    <h4>Seguinos</h4>
                    <p>Podes contactarnos y seguirnos en:</p>
                    <div>
                        <a href="https://www.facebook.com/belen.paileman.9?mibextid=ZbWKwL"></a>
                        <a href="https://www.instagram.com/bp_pasteleria.ar/"></a>
                        <a href="https://wa.me/2616341196" ></a>
                    </div>
            </div> */}

            <div >
                <p className={classes.parrafo}> Desarrollado por <strong><span>Nestor Llanos </span></strong> &copy; Copyright <strong><span>Tortita con Manteca</span></strong>.</p>

            </div>

        </footer>  

    )
}

export default Footer