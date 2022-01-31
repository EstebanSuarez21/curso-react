import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';




function ItemDetailContainer() {
    const URL = "http://localhost:3001/productos"
    const [productos, setProductos] = useState([])
    
    const {id} = useParams()
    const api = new Promise ((resolve, reject) => {
        setTimeout(() => {
            fetch(URL).then(data => data.json())
            .then(response => resolve(response))
        }, 2000);
    })

    useEffect(() => {
        console.log(api.state)
        api.then(res => {
            setProductos(res.find(item => item.id==id))
            console.log(api.state)
        }).catch(err => console.log(err))
    },[id])
return <div>
            <ItemDetail products={productos}/>
        </div>;
}

export default ItemDetailContainer;




