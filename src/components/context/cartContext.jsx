import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [patata, setPatata] = useState([])

    const isInCart = (producto , canntidad) => {
        cart.find((item) => item.producto.id === producto.id) 
    }
    const agregarCarrito = (producto, cantidad) => {
        const newItem = {producto, cantidad}
        setCart((prevState) => [...prevState, newItem])
        console.log(cart)
    }

    const removeItem = () => {

    }

    const clear = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{agregarCarrito, isInCart, cart}}>
            {children}
        </CartContext.Provider>
    )
}