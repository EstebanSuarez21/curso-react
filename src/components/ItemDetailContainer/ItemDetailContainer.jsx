import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import resultado from '../../Db/api'

const api = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(resultado)
    }, 2000);
})

function ItemDetailContainer() {
    const [items, setItems] = useState([])
    const datos = api.then(res => res)
    useEffect(()=>{
        api.then(res => {
            setItems(res[0])
        })
    },[datos])
return <div>
    <ItemDetail products={items}/>
    </div>;
}

export default ItemDetailContainer;

//intente de la forma que hizo el profesor y llamar a ItemDetail pero no funcionaba

// function ItemDetailContainer() {
//     const [productos, setProductos] = useState([])

//     useEffect(() => {
//         const URL = "http://localhost:3001/productos"

//         fetch(URL)
//             .then((response) => response.json())
//             .then((json) => setProductos(json))
//     }, []);
    
// }


