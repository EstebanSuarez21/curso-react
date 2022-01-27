import React from 'react';
import "./itemDetail.css"

function ItemDetail({products}) {
    return <div className='itemDetailContainer'>
        <img src={products.pictureURL} alt="" />
        <div>
            <h3 className='detailItemTitle'>{products.title}</h3>
            <p className='detailItemDescription'>{products.description}</p>
            <p>{products.price}</p>
            <button key={products.id}>Comprar</button>
        </div>

    </div>;
}

export default ItemDetail;
