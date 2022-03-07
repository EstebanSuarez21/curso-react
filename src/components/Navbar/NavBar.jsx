import React, { useState, useEffect } from 'react'
import icon from "../../image/icon.png"
import hamburguesa from "../../image/hamburguesa.png"
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
  const [linksCat, setLinksCat] = useState([])
  let widthScreen = useScreenSize()
  const [clase, setClase] = useState(widthScreen)
  let location = useLocation().pathname

//abrir el sidebar cuando se presione un link
  const hanndleClick = () =>{
    setSideBar(!sideBar)
    setButton(false) //cerrar el menu hamburguesa 
  }

  //setear clases para responsive
  useEffect(() => {
    if (widthScreen >= 1080) {
      setClase('pc')
      setButton(false) //asegurarse de que el menu hamburguesa este inactivo
    } else if (widthScreen >= 700) {
      setClase('laptop')
      setButton(false)
    } else if (widthScreen >= 500) {
      setClase('tablet')
    }else if (widthScreen < 500) {
      setClase('big-phone')
    }
  }, [widthScreen])

  //traer los datos que se van a usar en el sidebar
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

  //setear los datos que se van a mandar al sidebar
  useEffect(() => {
    let bar
    switch (location) {
      case "/category/MyP":
        bar = linksCat.find((x) => x.id == "MyP")
        setIntento(bar.patata)
        break;
      case "/category/Vga":
        bar = linksCat.find((x) => x.id == "Vga")
        setIntento(bar.Vga)
        break;
      case "/category/AyR":
        bar = linksCat.find((x) => x.id == "AyR")
        setIntento(bar.AyR)
        break;
      case "/category/GyF":
        bar = linksCat.find((x) => x.id == "GyF")
        setIntento(bar.GyF)
        break;
      default:
        
        break;
    }
  }, [location])

  //setear el menu hamburguesa de activo a inactivo
  function toggleMenu() {
    setButton(!button)
  }
  
    return (
      <nav className={"nav__container " + clase}>
        <SideBar props={sideBar} links={intento}/>
        <div className="nav__icon">
          <Link to="/">
            <img src={icon} className='icon' alt="" />
          </Link>
        </div>
        <img onClick={toggleMenu} className={clase === "big-phone" || clase === "tablet" ? 'hamburguesa': 'none' } src={hamburguesa} alt="hamburguesaIcon" />

        <div className={`${button?'menu__container active':' menu__container ' + clase}`}>
          <ul className={"nav__ul " + clase}>
            <li className={"nav__li " + clase} onClick={hanndleClick}>
              <Link className='nav__a' to={"/category/MyP"}>Motherboards y Procesadores</Link>
            </li>
            <li className={"nav__li " + clase} onClick={hanndleClick}>
              <Link className='nav__a' to={"/category/Vga"}>Placas de video</Link>
            </li>
            <li className={"nav__li " + clase} onClick={hanndleClick}>
              <Link className='nav__a' to={"/category/AyR"}>Almacenamiento y Ram</Link>
            </li>
            <li className={"nav__li " + clase} onClick={hanndleClick}>
              <Link className='nav__a' to={"/category/GyF"}>Gabinetes y Fuentes</Link>
            </li>
            <li className={"nav__li " + clase} onClick={hanndleClick}>
              <Link className='nav__a' to={"/cart"}>
                <CardWidget />
              </Link>
            </li>
          </ul>
          <div className={"nav__register " + clase}>
              <p>Login</p>
              <p>Register</p>
          </div>

        </div>
      </nav>
    );
}

export default NavBar