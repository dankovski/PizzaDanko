import React, {useState, useEffect} from 'react';
import './styles/Sidebar.css';
import Icon from './images/icon_menu.png'
import { Link } from 'react-router-dom';

function Sidebar() {

const [isActive, setActive] = useState(false)

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
          <Link className="sidebar__menu--link" to='/menu' onClick={showOrHideSidebar}><li className="sidebar__menu--item">About</li></Link>
          <Link className="sidebar__menu--link" to='/menu' onClick={showOrHideSidebar}><li className="sidebar__menu--item">Menu</li></Link>
          <Link className="sidebar__menu--link" to='/menu' onClick={showOrHideSidebar}><li className="sidebar__menu--item">Delivery</li></Link>
          <Link className="sidebar__menu--link" to='/menu' onClick={showOrHideSidebar}><li className="sidebar__menu--item">Contact</li></Link>
        </ul>


      </div>

</>
      );

  }

  export default Sidebar;