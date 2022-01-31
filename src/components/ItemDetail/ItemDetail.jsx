import React from 'react';
import Counter from '../Counter/Counter';
import "./itemDetail.css"

function ItemDetail({products}) {
    return <div className='itemDetailContainer'>
                <div className='detailImgContainer'>
                    <img className='detailImg' src={products.picture} alt="" />
                </div>
                <div className='detailTextContainer'>
                    <h3 className='detailItemTitle'>{products.name}</h3>
                    <p className='detailItemDescription'>{products.description}</p>
                    <p>{products.price}</p>
                    <Counter/>
                </div>
            </div>;
}

export default ItemDetail;
