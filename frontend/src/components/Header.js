import React from 'react';
import './styles/Header.css'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Cart from './Cart';

function Header() {

return (

        <div className="header">
          <Sidebar/>
          <header className="header__navbar">
            <div className="header__container">
                <Link className="menu__item--link" to='/'>HOME</Link>
                <Link className="menu__item--link" to='/menu'>MENU</Link>
                <Link className="menu__item--link" to='/contact'>CONTACT</Link>
                <Link className="menu__item--link" to='/login'>LOGIN</Link>
                <Cart/>

            </div>

          </header>
       </div>
      );

  }

  export default Header;