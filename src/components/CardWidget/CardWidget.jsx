import React from 'react'
import iconCarrito from "../../image/carrito.png"

function CardWidget() {
    return (
        <div className='nav__carritoContainer'>
            <img src={iconCarrito} className='nav__carrito' alt="" />
            <span className='contadorCarrito'>4</span>
        </div>
    )
}

export default CardWidget
