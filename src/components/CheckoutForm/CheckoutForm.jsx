import { useState } from "react";
import classes from "./CheckoutForm.module.css";



const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState ("")
    const [phone, setPhone] = useState ("")
    const [email, setEmail] = useState ("")

    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData = {
            name,phone,email
        }
        onConfirm(userData)
    }
    return (
        <div className={classes.container}>
            <form onSubmit={handleConfirm}></form>
            <label>
                Nombre 
                <input type="text" value={name} onChange={({target})=>setName(target.value)} />
            </label>
            <label>
                Telefono 
                <input type="text" value={phone} onChange={({target})=>setPhone(target.value)} />
            </label>
            <label>
                Email
                <input type="text" value={email} onChange={({target})=>setEmail(target.value)} />
            </label>
            <div>
                <button  onClick={onConfirm} type="submit" className= {'btn btn-outline-secondary'}>Confirmar</button>
            </div>
        </div>
    )
}

export default CheckoutForm