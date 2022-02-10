import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import "./cartItem.css"


function CartItem({item}) {
    const {removeItem, clear} = useContext(CartContext)

    return <div className='cartItemContainer'>
        <div className='cartItemLeft'>
            <img className='cartItemImg' src={item.producto.picture} alt={item.producto.name} />
        </div>
        <div className="cartItemRight">
            <h3 className="cartItemName">{item.producto.name}</h3>
            <p className='cartItemPrice'>${item.producto.price}</p>
            <span className='cantidadItemCart'>Llevas {item.cantidad}</span>
            <button onClick={() => removeItem(item)}>Eliminar del Carrito</button>
        </div>
    </div>;
}

export default CartItem;
