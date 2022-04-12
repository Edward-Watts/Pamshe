import React, {Component} from "react";
import {Carousel, Container, Card, Button} from 'react-bootstrap';

import './Home.css'
import MenuBar from "../../components/menuBar/MenuBar";


class Home extends Component {
    state = {
        items: [
            {
                id: 1,
                heading: 'First slide label',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
                image: '',
            },
            {
                id: 2,
                heading: 'Second slide label',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
                image: '',
            },
            {
                id: 3,
                heading: 'Third slide label',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
                image: '',
            },
            {
                id: 4,
                heading: 'Four slide label',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
                image: '',
            }
        ]
    }

    render () {
        return (
            <div>
                <div>
                    <MenuBar />
                        <Carousel>
                            {this.state.items.map(item => (
                            <Carousel.Item interval={1500} key={item.id}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="slide"
                                />
                                <Carousel.Caption>
                                <h3>{item.heading}</h3>
                                <p>{item.text}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            ))}
                        </Carousel>
                </div>
                <div className="cardContainer">
                    <Container>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            </div>
        )
    } 
}

export default Home;