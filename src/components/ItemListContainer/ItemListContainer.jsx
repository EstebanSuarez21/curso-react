import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const api = new Promise((resolve, reject) => {
    resolve()
});
function ItemListContainer() {
    // Aca esta mi declaracion de la promise
    
    const [products, setProducts] = useState([])
    useEffect(()=>{
        setTimeout(() => {
            api.then(res => {
                setProducts(res)
            })
        }, 2000);
    },)
    return  <div>
            {products.length > 0 ?  <ItemList products={products} /> : <h1>Loading...</h1> }
            </div>;
}

export default ItemListContainer;

