import React, {useState, useEffect, useContext} from 'react';
import './styles/Sidebar.css';
import Icon from './images/icon_menu.png'
import { Link } from 'react-router-dom';
import { userContext } from '../ContextProvider';

function Sidebar() {

const [isActive, setActive] = useState(false)

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

const showOrHideSidebar = () => setActive(!isActive)

const handleResize = () => {
  if (window.innerWidth > 800) {
      setActive(false)
  }
}

useEffect(() => {
  window.addEventListener("resize", handleResize)
})

return (
  <>
      <img className="header__icon" src={Icon} alt="logo" onClick={showOrHideSidebar}></img>

      <div className={isActive ? "sidebar--active sidebar sidebar--show" : "sidebar sidebar--hidden"}>
        <div className="sidebar__header">
          <div className="sidebar__title">
            <h2 className="sidebar__title--text">Menu</h2>
          </div>
          <div className="sidebar__header--right">
            <img className="sidebar__icon" src={Icon} alt="logo" onClick={showOrHideSidebar}></img>
          </div>
        </div>
        <ul className="sidebar__menu">

          <Link className="sidebar__menu--link" to='/' onClick={showOrHideSidebar}><li className="sidebar__menu--item">Home</li></Link>
          <Link className="sidebar__menu--link" to='/menu' onClick={showOrHideSidebar}><li className="sidebar__menu--item">Menu</li></Link>
          <Link className="sidebar__menu--link" to='/contact' onClick={showOrHideSidebar}><li className="sidebar__menu--item">Contact</li></Link>
          {isLogged ?
            <button className="menu__item--link" onClick={logout}>Logout</button> :
            <Link className="sidebar__menu--link" to='/login' onClick={showOrHideSidebar}><li className="sidebar__menu--item">Login</li></Link>
          }
        </ul>

      </div>

</>
      );

  }

  export default Sidebar;