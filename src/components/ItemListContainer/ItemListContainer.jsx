import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const api = new Promise((resolve, reject) => {
    resolve([{
        id:1,
        title: "rtx3080",
        description: "juega en 2k a 144hz",
        price: 1000,
        pictureURL:"",
    },{
        id:2,
        title: "3090ti",
        description: 'Vivi en 4k y a 244Hz, la mas alta gama del 2022',
        price: 2500,
        pictureURL:"",
    },{
        id:3,
        title: "Ryzen 9 5950x",
        description: 'El mejor procesador alta gama del 2022',
        price: 800,
        pictureURL:"",
    },])
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
