import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

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
import OrderId              from './container/OrderId/OrderId';  

//AppContext
import { AppProvider } from './context/UseAppContext'



function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <SideBar/>
        <CartIcon/>
        <Diagonal/>
        
        
          <Switch>
            <Route exact path="/cart">
              <CartContainer/>
              <GoHome/>
            </Route>

            <Route exact path="/">
            <BrandContainer/>
              <HomeContainer/>   
              <CallToActionIcons/>
            </Route>
          
             
            <Route exact path="/order/:id">
              <OrderId/>
              <GoHome/>
            </Route> 

             <Route exact path="/category/:category">
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
