import React, { useContext, useEffect, useState } from 'react'
import iconCarrito from "../../image/carrito.png"
import { CartContext } from '../context/cartContext'

function CardWidget() {
    const {cart} = useContext(CartContext)
    const [quantity, setQuantity] = useState()
    useEffect(() => {
        setQuantity(cart.length)
    }, [cart])
    return (
        <div className='nav__carritoContainer'>
            <img src={iconCarrito} className='nav__carrito' alt="" />
            <span className={`${cart.length > 0 ? 'contadorCarrito' : 'none'}`}>{quantity}</span>
        </div>
    )
}

export default CardWidget
