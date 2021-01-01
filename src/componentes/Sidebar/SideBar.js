import React from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import './SideBar.scss';


const SideBar = () =>{
  
  return (<>
    <Menu left >
      <Link style={{textDecoration:'none',color:'white'}}to={'/'}>Home</Link>
      <Link style={{textDecoration:'none',color:'white'}}to={'/cart'}>Cart</Link>
    </Menu>
    </>
  );
}


export default SideBar;