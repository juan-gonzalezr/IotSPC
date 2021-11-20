//import Navigation from '../NavBar/Navigation.js'
import ListGroup from 'react-bootstrap/ListGroup'
import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge'
//import Navigation from './Navigation'


export default class Profile extends Component {
  
    
    
    render() {
        return (
            <div>
                
                <ListGroup as="ol" numbered>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Nombre</div>
      Juan David Gonzalez
    </div>
    <Badge variant="primary" pill>
      
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Email</div>
        juangonzalezr020796@gmail.com
    </div>
    <Badge variant="primary" pill>
     
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Celular</div>
      +57312*******
    </div>
    <Badge variant="primary" pill>
      
    </Badge>
  </ListGroup.Item>
</ListGroup>
            </div>
        )
    }
}
