import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase"


function ItemDetailContainer() {
    const [productos, setProductos] = useState([])
    
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const productsCollection = db.collection("productos")
        const selectedProduct = productsCollection.doc(id)

        selectedProduct.get().then((response) => {
            setProductos({...response.data(), id: response.id});
        })
    },[id]) //id
return <div>
            <ItemDetail products={productos}/>
        </div>;
}

export default ItemDetailContainer;




