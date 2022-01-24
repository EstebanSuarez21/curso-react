import React from 'react';
import "./item.css"

function Item({product}) {
  return  <div className='cardItem'>
            <h3 className='itemTitle'>{product.title}</h3>
            <p className='itemDescription'>{product.description}</p>
            <p className='itemDescription'>${product.price}</p>
          </div>;
}

export default Item;
