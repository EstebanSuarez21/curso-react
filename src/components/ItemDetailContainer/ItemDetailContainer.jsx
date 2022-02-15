import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase"


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
        console.log(id)
        const db = getFirestore()
        let productsCollection;
        if (id) {
            productsCollection = db.collection("productos").where("id", "==", String(id))
        } else {
            productsCollection = db.collection("productos")
        }
        
        const getDataFromFirestore = async () => {
            try{
                const response = await productsCollection.get();
                setProductos(response.docs.map((doc) => ({...doc.data(), id: doc.id})))
            }
            finally{
                console.log("patata")
            }
        }
        getDataFromFirestore()
        // api.then(res => {
        //     setProductos(res.find(item => item.id==id))
        //     console.log(api.state)
        // }).catch(err => console.log(err))
    },[id]) //id
return <div>
            <ItemDetail products={productos}/>
        </div>;
}

export default ItemDetailContainer;




