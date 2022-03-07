import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import useScreenSize from '../Hooks/useScreenSize';
import Counter from '../Counter/Counter';
import "./itemDetail.css"

function ItemDetail({products}) {
    const {isInCart, cart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    let widthScreen = useScreenSize()

    const [clase, setClase] = useState(widthScreen)

    useEffect(() => {
        if (widthScreen >= 1080) {
        setClase('pc')
        } else if (widthScreen >= 700) {
        setClase('laptop')
        } else if (widthScreen >= 500) {
        setClase('tablet')
        }else if (widthScreen < 500) {
        setClase('big-phone')
    }
    console.log(clase)
}, [widthScreen])
    
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

    
    return <div key={products.id}>
                <h3 className={'detailItemTitle ' + clase} >{products.name}</h3>
                <div className={"itemDetailContainer " + clase}>
                    <div className='detailImgContainer'>
                        <img className={'detailImg ' + clase} src={products.picture} alt={products.name} />
                    </div>
                    <div className={'detailTextContainer ' + clase}>
                        <p className='detailItemDescription'>{products.description}</p>
                        <p>{products.price} c/u</p>
                        <p>Su total es: {products.price * cantidad}</p>
                        <Counter increment={increment} decrement={decrement} cantidad={cantidad}/>
                        <button onClick={hanndleClick}>agregar al carrito</button>
                        <Link to="/cart">
                        <button disabled={cart.length <=0}>terminar compra</button>
                        </Link>
                    </div>
                </div>
            </div>;
}

export default ItemDetail;
