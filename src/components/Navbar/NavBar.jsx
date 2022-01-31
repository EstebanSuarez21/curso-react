import React from 'react'
import icon from "../../image/icon.png"
import CardWidget from '../CardWidget/CardWidget';
import { Link } from 'react-router-dom';

import "./navBar.css"

function NavBar() {
    return (
      <nav className="nav__container">
        <div className="nav__icon">
          <Link to="/">
            <img src={icon} className='icon' alt="" />
          </Link>
        </div>
        <ul className='nav__ul'>
          <li className="nav__li">
            <Link className='nav__a' to={"/category/MyP"}>Motherboards y Procesadores</Link>
          </li>
          <li className="nav__li">
            <Link className='nav__a' to={"/category/Vga"}>Placas de video</Link>
          </li>
          <li className="nav__li">
            <Link className='nav__a' to={"/category/AyR"}>Almacenamiento y Ram</Link>
          </li>
          <li className="nav__li">
            <Link className='nav__a' to={"/category/GyF"}>Gabinetes y Fuentes</Link>
          </li>
        </ul>
        <CardWidget />
        <div className="nav__register">
            <p>Login</p>
            <p>Register</p>
        </div>
      </nav>
    );
}

export default NavBar
