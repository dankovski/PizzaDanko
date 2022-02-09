import React, { useContext } from 'react';
import './styles/Header.css'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Cart from './Cart';
import { userContext } from '../ContextProvider';

function Header() {

  const { user, setUser, isLogged, setIsLogged } = useContext(userContext);

  function logout() {

    fetch("http://localhost:8000/api/logout", {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })


    setIsLogged(false);
    setUser(null);
  }


  return (

    <div className="header">
      <Sidebar />
      <header className="header__navbar">
        <div className="header__container">
          <Link className="menu__item--link" to='/'>HOME</Link>
          <Link className="menu__item--link" to='/menu'>MENU</Link>
          <Link className="menu__item--link" to='/contact'>CONTACT</Link>
          {isLogged ?
            <button className="menu__item--link" onClick={logout}>LOGOUT</button> :
            <Link className="menu__item--link" to='/login'>LOGIN</Link>
          }

          <Cart />

        </div>

      </header>
    </div>
  );

}

export default Header;