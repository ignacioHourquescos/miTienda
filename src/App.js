import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css'
//Components
import CartIcon             from './componentes/CartIcon/CartIcon';
import SideBar              from './componentes/Sidebar/SideBar';
import CallToActionMenu     from './componentes/CallToActionMenu/CallToActionMenu'
import Diagonal             from './componentes/Diagonal/Diagonal';
import CallToActionIcons    from './componentes/CallToActionIcons/CallToActionIcons'; 

//Containers
import HomeContainer        from './container/HomeContainer/HomeContainer';
import ItemDetailContainer  from './container/ItemDetailContainer/ItemDetailContainer';
import CartContainer        from './container/CartContainer/CartContainer';
import CategoryContainer    from './container/CategoryContainer/CategoryContainer';

//AppContext
import { AppProvider } from './context/UseAppContext'



function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <SideBar/>
        <CartIcon/>
        <Diagonal/>
        <CallToActionMenu/>
        <CallToActionIcons/>
          <Switch>

            <Route exact path="/cart">
              <CartContainer/>
            </Route>
             
             <Route exact path="/:category">
              <CategoryContainer/>   
            </Route>
            <Route exact path="/product/:id">
              <ItemDetailContainer/>
            </Route> 

            <Route exact path="/">
              <HomeContainer/>   
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
