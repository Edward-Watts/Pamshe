import React, {useState} from "react";
import {Carousel, Container, Card, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import './Home.css'
import MenuBar from "../../components/menuBar/MenuBar";


const Home = () => {
    const [items, setItems] = useState(
        [
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
    );

    const [cards, setCards] = useState(
        [
            {
                id: 1,
                title: 'Gents Wear',
            },
            {
                id: 2,
                title: 'Ladies Wear',
            },
            {
                id: 3,
                title: 'Kids Wear',
            }
        ]
    )

    let navigate = useNavigate();


    const goToWearHandler = (card) => {
        console.log(card)
        navigate(`items/:${card.id}`);
    } 

    return (
            <div>
                <div>
                    <MenuBar />
                        <Carousel>
                            {items.map(item => (
                            <Carousel.Item interval={2000} key={item.id}>
                                <img
                                className="imgSlide d-block w-100"
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
                <div className="cardContainer mt-1">
                    <Container className="cardWrapper d-flex justify-content-center align-items-center">
                        {cards.map(card => (
                        <Card className="mx-3 mt-3 bg-dark text-white" style={{width: '20rem', height: '11rem'}} key={card.id}>
                            <Card.Img src="holder.js/100px270" alt="Card image" />
                            <Card.ImgOverlay style={{top: 'auto'}}>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text className="d-none">Some text here</Card.Text>
                                <Button variant="light" onClick={() => goToWearHandler(card)}>Go somewhere</Button>
                            </Card.ImgOverlay>
                        </Card>
                        ))}
                    </Container>
                </div>
            </div>
    )
}

export default Home;