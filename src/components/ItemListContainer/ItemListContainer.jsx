import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const URL = "http://localhost:3001/productos"
    const [productos, setProductos] = useState([])
    const { categoryid } = useParams()
    const api = new Promise ((resolve, reject) => {
        setTimeout(() => {
            fetch(URL).then(data => data.json())
            .then(response => resolve(response))
        }, 2000);
    })

    useEffect(() => {
        api.then(res => {
            console.log(categoryid)
            if (categoryid) {
                setProductos(res.filter(items => items.category == categoryid))
            } else {
                setProductos(res)
            }

        }).catch(err => console.log(err))
        return setProductos([])  
    },[categoryid])
    return <div>
                <ItemList products={productos}/>
            </div>;
}

export default ItemListContainer;

