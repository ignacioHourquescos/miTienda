import React from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import './SideBar.css';

const SideBar = () =>{


    return (
      <Menu right customCrossIcon={ false }>

        <li><Link to={'/carrito'}>Carrito</Link></li>

        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  
}


export default SideBar;