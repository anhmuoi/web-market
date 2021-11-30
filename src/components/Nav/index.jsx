import React, { useState } from 'react';
import logo from '../../images/logo.png';

function Nav(props) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="nav__button">
          <a href="/#">INTRODUCTION</a>
          <a href="/#">SOLUTION</a>
          <a href="/#" className="nav__gach">
            RATE PLAN
          </a>
          <a href="/#">LOGIN</a>
          <a href="/#">APPLY FOR FREE USE</a>
        </div>
        <div className="nav__menu">
          <div onClick={() => setShowMenu(true)}>
            <ion-icon style={{ color: 'white' }} name="menu"></ion-icon>
          </div>

          <ul className={`menu ${showMenu ? 'menu__is-show' : ''}`}>
            <div onClick={() => setShowMenu(false)}>
              <ion-icon name="close-circle" className="menu__close"></ion-icon>
            </div>
            <li className="menu-item">
              <a href="/#" className="menu__link">
                INTRODUCTION
              </a>
            </li>
            <li className="menu-item">
              <a href="/#" className="menu__link">
                SOLUTION
              </a>
            </li>
            <li className="menu-item">
              <a href="/#" className="menu__link">
                RATE PLAN
              </a>
            </li>
            <li className="menu-item">
              <a href="/#" className="menu__link">
                LOGIN
              </a>
            </li>
            <li className="menu-item">
              <a href="/#" className="menu__link">
                APPLY FOR FREE USE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
