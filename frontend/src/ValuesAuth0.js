import React from 'react'
import {Auth0Provider} from '@auth0/auth0-react';
//import {useAuth0} from './react-auth0-spa'

function ValuesAuth0(){
    return <div><Auth0Provider domain="dev-gm1ke-ls.us.auth0.com" clientId=" rYPl0rywSneFR6YHvjWsi4VfkCRDWfnl"
redirectUri={window.location.origin} /> </div>
}

export default ValuesAuth0;