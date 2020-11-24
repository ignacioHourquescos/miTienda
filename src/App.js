import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css'
//Components
import NavBar               from './componentes/NavBar/NavBar';
import SideBar              from './componentes/SideBar/SideBar';
import Cart                 from './componentes/Cart/Cart';

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

        <Route exact path="/product/:id">
          <ItemDetailContainer/>
        </Route> 

        
        <Route exact path="/cart/:userid">
          <Cart/>
        </Route> 


      </Switch>


    </BrowserRouter>
  );
}

export default App;
