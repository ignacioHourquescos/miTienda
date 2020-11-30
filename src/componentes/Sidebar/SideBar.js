import React from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import './SideBar.css';

const SideBar = () =>{


    return (
      <Menu right customCrossIcon={ false }>

        <a className="menu-item"><Link style={{textDecoration:'none',color:'white'}}to={'/carrito'}>Carrito</Link></a>

        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  
}


export default SideBar;