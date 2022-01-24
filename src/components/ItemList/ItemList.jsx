import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';

function ItemList({products}) {
    const [arrayProducts, setProducts] = useState([])
    useEffect(()=>{
        setProducts(products)
    }, [products])
    return <div>
        {arrayProducts.map(item => <Item product={item} key={item.id}/>)}
    </div>;
}

export default ItemList;
