import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import Counter from '../Counter/Counter';
import "./itemDetail.css"

function ItemDetail({products}) {

    const {isInCart, cart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const increment = () => {
        setCantidad((prevState) => prevState + 1)
    }
    const decrement = () => {
        if (cantidad >= 2) {
            setCantidad((prevState) => prevState - 1)
        }
    }

    const hanndleClick = ()=> {
        isInCart(products, cantidad)
    }

    return <div className='itemDetailContainer'>
                <div className='detailImgContainer'>
                    <img className='detailImg' src={products.picture} alt="" />
                </div>
                <div className='detailTextContainer'>
                    <h3 className='detailItemTitle'>{products.name}</h3>
                    <p className='detailItemDescription'>{products.description}</p>
                    <p>{products.price} c/u</p>
                    <p>Su total es: {products.price * cantidad}</p>
                    <Counter increment={increment} decrement={decrement} cantidad={cantidad}/>
                    <button onClick={hanndleClick}>agregar al carrito</button>
                    <Link to="/cart">
                    <button disabled={cart.length <=0}>terminar compra</button>
                    </Link>
                </div>
            </div>;
}

export default ItemDetail;
