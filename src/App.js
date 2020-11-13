import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import SideBar from './componentes/SideBar/SideBar';
import Home from './componentes/Home/Home';


function App() {
  return (<>
    <NavBar/>
    <SideBar/>
    <Home greeting="Mi tienda"/>
    </>
  );
}

export default App;
