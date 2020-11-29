import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css'
//Components
import NavBar               from './componentes/NavBar/NavBar';
import SideBar              from './componentes/SideBar/SideBar';

//Containers
import HomeContainer        from './container/HomeContainer/HomeContainer';
import ItemDetailContainer  from './container/ItemDetailContainer/ItemDetailContainer';
import CartContainer        from './container/CartContainer/CartContainer';

//AppContext
import { AppProvider } from './context/UseAppContext'



function App() {
  return (
    <AppProvider>
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
            <Route exact path="/cart">
              <CartContainer/>
            </Route> 
            {/* <Route exact path="/cart/:userid">
              <Cart/>
            </Route>  */}
          </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
