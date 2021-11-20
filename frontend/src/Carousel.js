import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import perrito from './images/perrito.jpg'
import gatito from './images/gatito.jpg'
import wall from './images/wall.jpg'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Samuel from './images/Samuel.png'
import Padilla from './images/Padilla.png'
import juancho from './images/Juancho.png'
import Stack from 'react-bootstrap/Stack'
export default class Carro extends Component {
    render() {
        const mystyle = {
            color: "White",
            padding: "40px",
            fontFamily:"Algerian",
            fontSize: "40px"
          };

          const mystyle2 = {
            color: "white",
            padding: "40px",
            fontFamily:"Arial",
            fontSize: "30px"
          };
        return (
            <div>

                <Carousel variant="dark" interval= "5000" >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={perrito}
                                alt="First slide"
                                height = "1080"
                                width = "1920"
                            />
                            <Carousel.Caption>
                                <h2 style = {mystyle} >¿Qué es SPC?</h2>
                                <p  style = {mystyle2} >Spc es un servicio de IoT que te permite cuidar mejor de tu amigo fiel,
                                mediante el monitoreo de los muy importantes hábitos de alimentación de tu
                                mascota.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-90"
                                src={gatito}
                                alt="Second slide"
                                height = "900"
                                width = "1920"
                            />
                            <Carousel.Caption>
                                <h2 style = {mystyle}>¿Por qué contar con SPC?</h2>
                                <p1 style = {mystyle2}>Porque SPC brinda completa adaptabilidad a los hábitos de la mascota y una buena personalización por parte del usuario</p1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <Image
                                className="d-block w-100"
                                src={wall}
                                alt="Third slide"
                                height = "900"
                                width = "1920"
                                />
                            <Carousel.Caption >
                            <Stack direction="vertical" gap={3}>
                                <h2 style = {mystyle}  >Equipo de trabajo</h2>

                                <CardGroup>
                                    <Card text = 'dark'>
                                        <Card.Img variant="top" src= {Samuel} />
                                            <Card.Body>
                                                <Card.Title>Samuel Rodriguez</Card.Title>
                                                <Card.Text>
                                                    Estudiante de ing. Electrónica 
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">samuel_rodriguez@.edu.co</small>
                                            </Card.Footer>
                                    </Card>
                                    <Card text = 'dark'>
                                        <Card.Img variant="top" src= {juancho} />
                                            <Card.Body>
                                                <Card.Title>Juan David Gonzalez</Card.Title>
                                                <Card.Text>
                                                Estudiante de ing. Electrónica 
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">juan-gonzalezr@javeriana.edu.co</small>
                                            </Card.Footer>
                                    </Card>
                                    <Card text = 'dark'>
                                        <Card.Img variant="top"src= {Padilla} />
                                            <Card.Body>
                                                <Card.Title>Samuel Arturo Padilla</Card.Title>
                                                <Card.Text>
                                                Estudiante de ing. Electrónica.
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted"> samuel.padilla@.edu.co</small>
                                            </Card.Footer>
                                        </Card>
                                </CardGroup>
                                </Stack>
                            </Carousel.Caption>                                
                            </div>
                        </Carousel.Item>
                    </Carousel>
                
            </div>
        )
    }
}
