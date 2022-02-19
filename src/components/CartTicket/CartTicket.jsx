import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase'

function CartTicket() {
    const { orderId } = useParams()
    const [order, setOrder] = useState({})
    useEffect(() => {
        const db = getFirestore()
        db.collection('orders')
        .doc(orderId)
        .get()
        .then((res) => setOrder({ id: res.id, ...res.data() }))
    }, [orderId])
    return (
        <div>
            <h2>gracias por su compra {order.buyer.nombre}</h2>
            <div>
                <h3>compraste:</h3>
                {order.items.map(product => <li>{product.producto.name}</li>)}
                <p>tu compra fue un total de: {order.total}</p>
            </div>
        </div>
    )
}

export default CartTicket