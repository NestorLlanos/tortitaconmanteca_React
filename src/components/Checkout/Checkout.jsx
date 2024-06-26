
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutForm from "../CheckoutForm/CheckoutForm";



const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async (userData) => {
        

        try {              
            setLoading(true)
            const objOrder = {
                buyer: {
                    userData
                },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
    
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    

            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
    
            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...data})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)
                
                clearCart()
                setOrderId(id)
                console.log(id)
            } else {
                toast.error ('hay productos que no tienen stock disponible')
                
            }
        } catch (error) {
            toast.error ('Hubo un error en la generacion de la orden')            
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1 style={{paddingTop: '110px', textAlign: 'center'}}>Su orden está siendo generada...</h1>
    }

    if(orderId) {
        return <h1 style={{paddingTop: '110px', textAlign: 'center'}}>El id de su orden es: {orderId}</h1>
    }

    return  (
        <div className="d-grid gap-2">
            <h1 style={{paddingTop: '110px', textAlign: 'center'}}>Ingresa tus datos</h1>
            <CheckoutForm onConfirm={createOrder} className= {'btn btn-outline-secondary'}/>
            
        </div>
    )
}

export default Checkout