import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase"

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const { categoryid } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        let productsCollection;
        if (categoryid) {
            productsCollection = db.collection("productos").where("category", "==", String(categoryid))
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
        return setProductos([])  
    },[categoryid])
    return <div>
                <ItemList products={productos}/>
            </div>;
}

export default ItemListContainer;

