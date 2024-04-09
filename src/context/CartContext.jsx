import { createContext, useState } from "react";

export const CartContext = createContext({cart:[]})
export const CartProvider = ({children})=>{

    const [cart,setCart]=useState ([])

    const addItem = (productToAdd) =>{
        if (!isInCart(productToAdd.id)) {
          setCart(prev=>[...prev,productToAdd])
        } else{
            toast.error ('Este producto ya fue agregado',{position: "bottom-right",
            autoClose: 2000})
        }
        }

    const removeItem = (itemId)=> {
        const cartUpdated = cart.filter(prod=> prod.id !== itemId)
        setCart(cartUpdated)
    }
    const clearCart = () =>{
        setCart([])
    }
    const isInCart = (itemId) =>{
        return cart.some(prod=> prod.id === itemId)
    }
    const getTotalQuantity =()=>{
        let acumulador = 0
        cart.forEach(prod=>{acumulador += prod.quantity})
      
        return acumulador
        }
      
        const totalQuantity = getTotalQuantity()

    const getTotal = () => {
            let total = 0
        
            cart.forEach(prod => {
              total += prod.quantity * prod.price
            })
        
            return total
          }

          const total = getTotal()
          
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}