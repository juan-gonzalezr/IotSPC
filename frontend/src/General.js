import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";

import Perfil from './components/Perfil'
import Mimascota from './components/Mimascota'
import Nosotros from './components/Nosotros'
import InfoList from './components/InfoList'
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";


export default class General extends Component {
    render() {
        return (
            <Router>
              <Navigation/>
                
              
              <div id="div-mostrar"  >
              <title>Spc</title>
                <div  >
                  
                  <Route path="/" exact component={InfoList} />
                  <Route path="/Mimascota" component={Mimascota} />
                  <Route path="/Perfil" component={Perfil} />
                  <Route path="/Nosotros" component={Nosotros} />
                  <Route path="/Login" component={Login} />
                  <Route path="/Register" component={CreateUser} />
                  
                </div>
              </div>
              
            </Router>
          );
    }
}
