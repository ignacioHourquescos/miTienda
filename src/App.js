import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css'
//Components
import CartIcon             from './componentes/CartIcon/CartIcon';
import SideBar              from './componentes/Sidebar/SideBar';
import Diagonal             from './componentes/Diagonal/Diagonal';
import CallToActionIcons    from './componentes/CallToActionIcons/CallToActionIcons'; 
import NotFoundPage         from './componentes/NotFoundPage/NotFoundPage';
import GoHome               from './componentes/GoHome/GoHome';
//Containers
import HomeContainer        from './container/HomeContainer/HomeContainer';
import ItemDetailContainer  from './container/ItemDetailContainer/ItemDetailContainer';
import CartContainer        from './container/CartContainer/CartContainer';
import CategoryContainer    from './container/CategoryContainer/CategoryContainer';
import BrandContainer       from './container/BrandContainer/BrandContainer';

//AppContext
import { AppProvider } from './context/UseAppContext'



function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <SideBar/>
        <CartIcon/>
        <Diagonal/>
        <BrandContainer/>
        
          <Switch>
            <Route exact path="/cart">
              <CartContainer/>
              <GoHome/>
            </Route>

            <Route exact path="/">
              <HomeContainer/>   
              <CallToActionIcons/>
            </Route>
          
             
             <Route exact path="/:category">
              <CategoryContainer/>  
              <CallToActionIcons/>
              <GoHome/>
            </Route>

            <Route exact path="/product/:id">
              <ItemDetailContainer/>
              <GoHome/>
            </Route> 

            <Route exact path="*">
              <NotFoundPage/>
              <GoHome/>
            </Route>

       
            

          </Switch>
          
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
