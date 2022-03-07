import React, { useState, useEffect } from 'react';
import "./itemList.css"
import Item from '../Item/Item';

function ItemList({products}) {

    const [arrayProducts, setProducts] = useState([])
    useEffect(()=>{
        setProducts(products)
    }, [products])
    return <div>
        <h1 className='title'>Bienvenidos a Zona Gamer!</h1>
        <div className='catalogoContainer'>
        {arrayProducts.length > 0 ? arrayProducts.map(item => <Item product={item}/> ) : <h1>Cargando...</h1> }
        </div>
    </div>;
}

export default ItemList;
