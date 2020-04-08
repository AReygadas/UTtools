import React, { Component } from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Perfil from './Pages/Home/SitioEnConstruccion'
import LogIn from './Pages/Login/signin'
import Context from './Context'


class App extends Component {
  render() {
    return (
      <React.Fragment>
          <BrowserRouter>
            <Context.Consumer>
            {
              ({isAuth}) =>
              isAuth
               ?
                <Switch>
                  <Route exact path='/' component={Perfil} />
                  
                </Switch>
                :
                <Switch>
                  <Route exact path='/' component={LogIn} />
                 
               </Switch>
            }
            </Context.Consumer>
          </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
