import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [update, setUpdate] = useState(false)
    const isInCart = (producto , quantity) => {
        const result = cart.find((item) => item.producto.id === producto.id)
        if (result){
            result.cantidad += quantity
            setUpdate(!update)
        } else agregarCarrito(producto, quantity)
    }
    const agregarCarrito = (producto, cantidad) => {
        const newItem = {producto, cantidad}
        setCart((prevState) => [...prevState, newItem])
        setUpdate(!update)
    }

    const removeItem = (producto) => {
        const index = cart.findIndex(item => item.producto.id === producto.id)
        cart.splice(index, 1)
        setUpdate(!update)
    }

    const clear = () => {
        setCart([])
        setUpdate(!update)
    }

    return(
        <CartContext.Provider value={{agregarCarrito, isInCart, cart, removeItem, clear, update}}>
            {children}
        </CartContext.Provider>
    )
}