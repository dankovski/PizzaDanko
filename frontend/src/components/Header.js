import React from 'react';
import './styles/Header.css'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Cart from './Cart';

function Header(props) {

return (

        <div className="header">
          <Sidebar/>
          <header className="header__navbar">
            <div className="header__container">
                <Link className="menu__item--link" to='/'>HOME</Link>
                <Link className="menu__item--link" to='/menu'>MENU</Link>
                <Link className="menu__item--link" to='/'>CONTACT</Link>
                <Link className="menu__item--link" to='/contact'>LOGIN</Link>
                <Cart cartItems={props.cartItems} onFoodOrder={props.onFoodOrder} onCartItemRemove={props.onCartItemRemove} onCartItemDelete={props.onCartItemDelete}/>

            </div>

          </header>
       </div>
      );

  }

  export default Header;