import React, { useState, useEffect } from 'react';
import "./item.css"
import { Link } from 'react-router-dom';
import useScreenSize from '../Hooks/useScreenSize';
function Item({product}) {
  let widthScreen = useScreenSize()

  const [clase, setClase] = useState(widthScreen)

  useEffect(() => {
    if (widthScreen >= 1080) {
      setClase('pc')
    } else if (widthScreen >= 700) {
      setClase('laptop')
    } else if (widthScreen >= 500) {
      setClase('tablet')
    }else if (widthScreen < 500) {
      setClase('big-phone')
    }

  console.log(clase)
  }, [widthScreen])
  
  function classHandler(px){
    if (px >= 1080) {
      return 'pc'
    } else if (px < 1080 && px >= 700) {
      console.log('nav__container laptop')
      return 'laptop'
    } else if (px < 700 && px > 500) {
      console.log('nav__container tablet')
      return 'tablet'
    }else if (px < 500) {
      console.log('nav__container big-phone')
      return 'big-phone'
    } else {
      return ''
    }
  }

  return  <div className={'cardItem ' + clase} key={product.id}>
            <img className='cardImgItem' src={product.picture} alt="No Imagen" />
            <h3 className='itemTitle'>{product.name}</h3>
            <p className='itemDescription'>${product.price}</p>
            <Link to={`/item/${product.id}`}>
              <button className='buttonDetails' key={product.id}>Ver Detalles</button>
            </Link>
          </div>;
}

export default Item;
