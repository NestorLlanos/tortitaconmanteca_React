import { useState } from "react";
import classes from "./CheckoutForm.module.css";



const CheckoutForm = ({onConfirm, createOrder}) => {
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
            <form onSubmit={handleConfirm} className="row g-3 needs-validation"></form>
            <div className="col-md-4">
            <label className="form-label">
                Nombre 
                <input className="form-control" type="text" value={name} onChange={({target})=>setName(target.value)} />
            </label>
            </div>

            <div className="col-md-4">
            <label className="form-label">
                Telefono 
                <input className="form-control" type="text" value={phone} onChange={({target})=>setPhone(target.value)} />
            </label>
            </div>
            
            <div className="col-md-4">
            <label className="form-label">
                Email
                <input  className="form-control" type="text" value={email} onChange={({target})=>setEmail(target.value)} />
            </label>
            </div>
            
            <div className="col-12">
                <button  onConfirm={createOrder} type="submit" className= {'btn btn-secondary'}>Confirmar</button>
            </div>
        </div>
    )
}

export default CheckoutForm