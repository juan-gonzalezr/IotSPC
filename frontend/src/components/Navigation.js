//import React, { Component } from "react";
import {Link} from 'react-router-dom'

import {useEffect , useState} from 'react'
//import  from 'react'
const googleClientId="26187728898-frhiuash53889sp0v91ps9ng3b133dpe.apps.googleusercontent.com";


const loadGoogleScript = () => {
  
  //loads the Google JavaScript Library
  (function () {
      const id = 'google-js';
      const src = 'https://apis.google.com/js/platform.js';
      
      //we have at least one script (React)
      const firstJs = document.getElementsByTagName('script')[0];
      
      //prevent script from loading twice
      if (document.getElementById(id)) { return; }
      const js = document.createElement('script'); 
      js.id = id;
      js.src = src;
      js.onload = window.onGoogleScriptLoad; 
      firstJs.parentNode.insertBefore(js, firstJs);
  }());    
  
}


function Navigation() {
  
  const [gapi, setGapi] = useState();
  const [googleAuth, setGoogleAuth] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState();
  
  const onSuccess = (googleUser) => {
    debugger;
    console.log('result from google', googleUser);
    setIsLoggedIn(true);
    const profile = googleUser.getBasicProfile();
    setName(profile.getName());
    setEmail(profile.getEmail());
    setImageUrl(profile.getImageUrl());
  };
  
  const onFailure = () => {
    setIsLoggedIn(false);
  }
  
  const logOut = () => {
    (async() => {
      await googleAuth.signOut();
      setIsLoggedIn(false);
      renderSigninButton(gapi);
    })();
  };
  
  const renderSigninButton = (_gapi) => {
    _gapi.signin2.render('google-signin', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure 
    });
  }
  
  
  useEffect(() => {
    
    //window.gapi is available at this point
    window.onGoogleScriptLoad = () => {
     
      const _gapi = window.gapi;
      setGapi(_gapi);
      
      _gapi.load('auth2', () => {
        (async () => { 
          const _googleAuth = await _gapi.auth2.init({
           client_id: googleClientId
          });
          setGoogleAuth(_googleAuth);
          renderSigninButton(_gapi);
        })();
      });
    }
    
    //ensure everything is set before loading the script
    loadGoogleScript();
    
  }, []);

  
  
  
  return (
    <div className="App">
      <header className="App-header">
        
        {!isLoggedIn &&
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          
          <Link className="navbar-brand" to="/"> SPC </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              
              
              <li className="nav-item">
              <Link className="nav-link" to="/Mimascota">{<div id="google-signin"></div>  }</Link>
                
                
                  
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">Register</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
        
        }
        
        {isLoggedIn &&
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          
          <Link className="navbar-brand" to="/"> SPC </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              
              <li className="nav-item">
                <Link className="nav-link" to="/Mimascota">
                  Mi Mascota
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Perfil">
                  Perfil
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/" >
                <button className='btn-primary' onClick={logOut}>Log Out</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
         
        }
      </header>
    </div>
  );
}


export default Navigation;
