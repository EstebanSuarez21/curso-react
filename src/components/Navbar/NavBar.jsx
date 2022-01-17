import React from 'react'
import icon from "../../image/icon.png"
import CardWidget from '../CardWidget/CardWidget';

import "./navBar.css"

function NavBar() {
    return (
      <nav className="nav__container">
        <div className="nav__icon">
          <img src={icon} className='nav__img' alt="" />
        </div>
        <ul className='nav__ul'>
          <li className="nav__li">
            <a href="" className="nav__a">link 1</a>
          </li>
          <li className="nav__li">
            <a href="" className="nav__a">link 2</a>
          </li>
          <li className="nav__li">
            <a href="" className="nav__a">link 3</a>
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
