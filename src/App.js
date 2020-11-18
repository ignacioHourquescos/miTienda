import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css'
//Components
import NavBar               from './componentes/NavBar/NavBar';
import SideBar              from './componentes/SideBar/SideBar';
//Containers
import HomeContainer        from './container/HomeContainer/HomeContainer';
import ItemDetailContainer  from './container/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter>
      <SideBar/>
      <NavBar/>

      <Switch>

        <Route exact path="/">
          <HomeContainer/>   
        </Route>

        <Route exact path="/detalle">
          <ItemDetailContainer/>
        </Route> 

      </Switch>


    </BrowserRouter>
  );
}

export default App;
