import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import CartItem from '../CartItem/CartItem';
import "./cart.css"
import { Link } from 'react-router-dom';

function Cart() {
    const {cart} = useContext(CartContext)
    let totalCost = 0 
    if (cart.length > 0) {
        cart.map(item => totalCost += item.cantidad * item.producto.price)
        console.log(totalCost)
        return <div className='cartContainer'>
            {cart.map(item => <CartItem item={item}/>)}
            <p>su total es de ${totalCost}</p>
        </div>
    } else {
        return <div className='cartContainer'>
            <p>parece que no agregaste nada al carrito</p>
            <Link to="/"><h1>volver al comprar</h1></Link>
        </div>
    }
}

export default Cart;
