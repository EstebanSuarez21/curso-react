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
  let location = useLocation().pathname

  const hanndleClick = () =>{
    setSideBar(!sideBar)
  }
  
  let withScreen = useScreenSize()
  const [linksCat, setLinksCat] = useState([])
  console.log(withScreen)
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
  
    return (
      <nav className="nav__container">
        <SideBar props={sideBar} links={intento}/>
        <div className="nav__icon">
          <Link to="/">
            <img src={icon} className='icon' alt="" />
          </Link>
        </div>
        <ul className='nav__ul'>
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
        <div className="nav__register">
            <p>Login</p>
            <p>Register</p>
        </div>
      </nav>
    );
}

export default NavBar
