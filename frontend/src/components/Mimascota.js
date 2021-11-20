import React, { Component } from 'react'
//import Navigation from '../NavBar/Navigation'
import Card from 'react-bootstrap/Card'
import { Row,Col } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import { Container } from 'react-bootstrap'
export default class Perfil extends Component {
    render() {
        return (
            <div>
               
               <div className= 'container p-4'>
               <Stack direction="vertical" gap={4}>
                <Stack direction="horizontal" gap={5}>
                    
                        <Card style={{ width: '30rem', height:'25rem' }} bg ={'Info'}>
                            <iframe 
                            width="380" 
                            height="260" 
                            src="https://thingspeak.com/channels/1570390/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">

                            </iframe>


                            <Card.Body>
                                <Card.Title>Nivel de agua de tu mascota</Card.Title>
                                <Card.Text>
                                        Aquí puedes ver el nivel de agua que ha tenido tu mascota en el plato 
                                        las ultimas horas
                                </Card.Text>
                            </Card.Body>
                    
                        </Card>
                        <Card style={{ width: '30rem', height:'25rem' }} bg ={'Info'}>
                            <iframe 
                            width="380" 
                            height="260" 
                            src="https://thingspeak.com/channels/1570390/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">

                            </iframe>  
                    <Card.Body>
                    <Card.Title>Nivel de comida de tu mascota</Card.Title>
                    <Card.Text>
                    Aquí puedes ver el nivel de comida que ha tenido tu mascota en el plato 
                    las ultimas horas
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                
                        <Card style={{ width: '30rem', height:'25rem' }} bg ={'Info'}>
                            <iframe 
                            width="380" 
                            height="260" 
                            src="https://thingspeak.com/apps/matlab_visualizations/434729">

                            </iframe>  
                    <Card.Body>
                    <Card.Title>Variación de pesos en la comida</Card.Title>
                    <Card.Text>
                    Aqui puedes observar el ritmo de comer de tu mascota a lo largo del día
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                
                </Stack>
                <Container>
                    <Row>
                        <Col>
                        <Card style={{ width: '30rem', height:'25rem' }} bg ={'Info'}>
                            <iframe 
                            width="455" 
                            height="260" 
                            src="https://thingspeak.com/apps/matlab_visualizations/434729">

                            </iframe>  
                            <Card.Body>
                            <Card.Title>Variación de pesos en la comida</Card.Title>
                            <Card.Text>
                            Aqui puedes observar el ritmo del nivel de líquido de tu mascota a lo largo del día
                            </Card.Text>
                            </Card.Body>                
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '30rem', height:'25rem' }} bg ={'Info'}>
                            <iframe 
                            width="455" 
                            height="260" 
                            src="https://thingspeak.com/apps/matlab_visualizations/435127">

                            </iframe>  
                            <Card.Body>
                            <Card.Title>Variación de pesos en la comida</Card.Title>
                            <Card.Text>
                            Aqui puedes observar el ritmo del nivel de líquido de tu mascota a lo largo del día
                            </Card.Text>
                            </Card.Body>                
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </Stack>
            
            </div>
            </div>
        )
    }
}