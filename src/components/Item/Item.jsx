import React from 'react';
import "./item.css"
import { Link } from 'react-router-dom';
function Item({product}) {
  return  <div className='cardItem' key={product.id}>
            <img className='cardImgItem' src={product.picture} alt="No Imagen" />
            <h3 className='itemTitle'>{product.name}</h3>
            <p className='itemDescription'>${product.price}</p>
            <Link to={`/item/${product.id}`}>
              <button className='buttonDetails' key={product.id}>Ver Detalles</button>
            </Link>
          </div>;
}

export default Item;
