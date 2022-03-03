import React, { useState, useEffect } from 'react'
import icon from "../../image/icon.png"
import CardWidget from '../CardWidget/CardWidget';
import { Link, useLocation } from 'react-router-dom';
import "./navBar.css"
import SideBar from '../SideBar/SideBar';
import { getFirestore } from '../../firebase';
import useScreenSize from '../Hooks/useScreenSize';

function NavBar() {
  const [sideBar, setSideBar] = useState(false)
  const [intento, setIntento] = useState([])
  const [button, setButton] = useState(false)
  let location = useLocation().pathname

  const hanndleClick = () =>{
    setSideBar(!sideBar)
  }
  
  let widthScreen = useScreenSize()
  const [linksCat, setLinksCat] = useState([])
  console.log(widthScreen)
  useEffect(() => {
    const db = getFirestore()
    const linksCollection = db.collection("links")
    const getDataFromFirestore = async () => {
      try{
          const response = await linksCollection.get();
          setLinksCat(response.docs.map((doc) => ({...doc.data(), id: doc.id})))
        console.log(linksCat)
      }
      finally{
          console.log("patata de final")
      }
  }
  getDataFromFirestore()

  }, [])

  useEffect(() => {
    let cante
    switch (location) {
      case "/category/MyP":
        cante = linksCat.find((x) => x.id == "MyP")
        setIntento(cante.patata)
        break;
      case "/category/Vga":
        cante = linksCat.find((x) => x.id == "Vga")
        setIntento(cante.Vga)
        break;
      case "/category/AyR":
        cante = linksCat.find((x) => x.id == "AyR")
        setIntento(cante.AyR)
        break;
      case "/category/GyF":
        cante = linksCat.find((x) => x.id == "GyF")
        setIntento(cante.GyF)
        break;
      default:
        
        break;
    }
  }, [location])
  function classHandler(px){
    if (px < 1080 && px > 700) {
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

  function toggleMenu() {
    setButton(!button)
  }
  
    return (
      <nav className={`${"nav__container " + classHandler(widthScreen)}`}>
        <SideBar props={sideBar} links={intento}/>
        <div className="nav__icon">
          <Link to="/">
            <img src={icon} className='icon' alt="" />
          </Link>
        </div>
        <button onClick={toggleMenu} className={widthScreen < 700? 'hamburguesa': 'none' }>hamburguesa</button>
        <ul className={`${button?'nav__ul active':' nav__ul ' + classHandler(widthScreen)}`}>
          <li className="nav__li" onClick={hanndleClick}>
            <Link className='nav__a' to={"/category/MyP"}>Motherboards y Procesadores</Link>
          </li>
          <li className="nav__li" onClick={hanndleClick}>
            <Link className='nav__a' to={"/category/Vga"}>Placas de video</Link>
          </li>
          <li className="nav__li" onClick={hanndleClick}>
            <Link className='nav__a' to={"/category/AyR"}>Almacenamiento y Ram</Link>
          </li>
          <li className="nav__li" onClick={hanndleClick}>
            <Link className='nav__a' to={"/category/GyF"}>Gabinetes y Fuentes</Link>
          </li>
          <li className='nav__li' onClick={hanndleClick}>
            <Link className='nav__a' to={"/cart"}>
              <CardWidget />
            </Link>
          </li>
        </ul>
        <div className={`${"nav__register " + classHandler(widthScreen)}`}>
            <p>Login</p>
            <p>Register</p>
        </div>
      </nav>
    );
}

export default NavBar
