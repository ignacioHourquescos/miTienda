import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import SideBar from './componentes/SideBar/SideBar';
import Home from './componentes/Home/Home';
import CartIcon from './componentes/CartIcon/CartIcon';

function App() {
  return (<>
    <CartIcon/>
    <NavBar/>
    <SideBar/>
    <Home greeting="Mi tienda"/>
    </>
  );
}

export default App;
