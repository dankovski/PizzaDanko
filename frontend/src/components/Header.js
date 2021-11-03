import React from 'react';
import './styles/Header.css'
import { Link } from 'react-router-dom';
import Button from './images/button_logo.png'
import Sidebar from './Sidebar';

function Header() {

return (

        <div className="header">
          <Sidebar/>
          <header className="header__navbar">
            <div className="header__container">
              <ul className="menu">
                <li className="menu__item"><Link className="menu__item--link" to='/'>ABOUT</Link></li>
                <li className="menu__item"><Link className="menu__item--link" to='/menu'>MENU</Link></li>
                <li className="menu__item menu__item--logo">
                  <Link className="menu__item--link" to='/'>
                  <img className="menu__item--logo" src={Button} alt="logo"></img>
                  </Link>
                </li>
                <li className="menu__item"><Link className="menu__item--link" to='/'>DELIVERY</Link></li>
                <li className="menu__item"><Link className="menu__item--link" to='/contact'>CONTACT</Link></li>
              </ul>
            </div>

          </header>
       </div>
      );

  }

  export default Header;