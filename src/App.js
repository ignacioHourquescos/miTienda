import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Example from './componentes/Sidebar/SideBar';

function App() {
  return (
    <>
    	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" style={{position:'fixed',zIndex:'10'}}><path fill="#0099ff" fill-opacity="1" d="M0,128L60,122.7C120,117,240,107,360,122.7C480,139,600,181,720,170.7C840,160,960,96,1080,85.3C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <NavBar/>
    <Example/>
    </>
  );
}

export default App;
