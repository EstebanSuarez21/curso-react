import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import CartItem from '../CartItem/CartItem';
import "./cart.css"
import { Link } from 'react-router-dom';

function Cart() {
    const {cart} = useContext(CartContext)
    const totalCost = 0 
    if (cart.length > 0) {
        cart.map(item => totalCost += item.cantidad)
        return <div className='cartContainer'>
            {cart.map(item => <CartItem item={item}/>)}
        </div>
    } else {
        return <div className='cartContainer'>
            <Link to="/"><h1>volver al comprar</h1></Link>
        </div>
    }
}

export default Cart;
