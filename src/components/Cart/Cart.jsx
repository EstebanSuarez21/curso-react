import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import { getFirestore } from '../../firebase'
import CartItem from '../CartItem/CartItem';
import "./cart.css"
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
    const {cart} = useContext(CartContext)
    const [clientName, setClientName] = useState("")
    const [clientPhone, setClientPhone] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    let navigate = useNavigate()
    let totalCost = 0 
    cart.map(item => totalCost += item.cantidad * item.producto.price)
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("se envio el resultado")
        const db = getFirestore()
        db.collection("orders")
        .add(newOrder)
        .then((res) => navigate(`/cartTicket/${res.id}`))
    }

    const newOrder = {
        buyer: {
            "nombre" : clientName,
            "phone": clientPhone,
            "email": clientEmail
        },
        items: cart,
        total: totalCost
    }

    if (cart.length > 0) {
        return <div className='cartContainer'>
            {cart.map(item => <CartItem item={item}/>)}
            <p>su total es de ${totalCost}</p>
            <h2>Para finalizar la compra ingrese sus datos:</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text"
                    id='nombre'
                    name='nombre'
                    placeholder='Escriba su nombre'
                    onChange = {(e) => setClientName(e.target.value)}
                />
                <label htmlFor="phone">phone</label>
                <input 
                    type="number"
                    id='phone'
                    name='phone'
                    placeholder='Escriba su numero de telefono'
                    onChange = {(e) => setClientPhone(e.target.value)}
                />
                <label htmlFor="email">Nombre</label>
                <input 
                    type="text"
                    id='email'
                    name='email'
                    placeholder='Escriba su email'
                    onChange = {(e) => setClientEmail(e.target.value)}
                />
                <input disabled={clientName === "" || clientPhone.length != 10 || clientEmail === ""} type="submit" value="Finalizar Compra" />
                
            </form>
            
        </div>
    } else {
        return <div className='cartContainer'>
            <p>parece que no agregaste nada al carrito</p>
            <Link to="/"><h1>volver al comprar</h1></Link>
        </div>
    }

}

export default Cart;
