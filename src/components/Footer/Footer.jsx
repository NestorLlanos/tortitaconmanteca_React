import classes from "./Footer.module.css"

const Footer = (props) =>{
    console.log(props);
    return (
        <footer className={classes.footer}>
            <button onClick={props.callBack} className = {props.className}> {props.label} </button>

        </footer>
        

    )
}

export default Footer