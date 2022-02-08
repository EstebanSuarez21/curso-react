import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = (producto , quantity) => {
        const result = cart.find((item) => item.producto.id === producto.id) 
        if (result){
            result.cantidad += quantity
            console.log(cart)
        } else agregarCarrito(producto, quantity)
    }
    const agregarCarrito = (producto, cantidad) => {
        const newItem = {producto, cantidad}
        setCart((prevState) => [...prevState, newItem])
        console.log(cart)
    }

    const removeItem = (producto) => {
        const index = cart.findIndex(item => item.producto.id === producto.id)
        cart.splice(index, 1)
        console.log(cart)
    }

    const clear = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{agregarCarrito, isInCart, cart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}