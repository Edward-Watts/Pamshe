import React, {Component} from "react";
import {Carousel} from 'react-bootstrap';

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
            </div>
        )
    } 
}

export default Home;