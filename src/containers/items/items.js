import React from "react";
import {Card, Button} from 'react-bootstrap';
import { useState } from "react";
import {useNavigate, useParams} from "react-router-dom";

import MenuBar from "../../components/menuBar/MenuBar";

import './items.css'

const Items = () => {

    const [items, setItems] = useState(
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
            },
            {
                id: 4,
                title: 'Gents Wear',
            },
            {
                id: 5,
                title: 'Ladies Wear',
            },
            {
                id: 6,
                title: 'Kids Wear',
            },
            {
                id: 7,
                title: 'Gents Wear',
            },
            {
                id: 8,
                title: 'Ladies Wear',
            },
            {
                id: 9,
                title: 'Kids Wear',
            },
            {
                id: 10,
                title: 'Gents Wear',
            },
            {
                id: 11,
                title: 'Ladies Wear',
            },
            {
                id: 12,
                title: 'Kids Wear',
            }
        ]
    );
    const navigate = useNavigate();
    const params = useParams();
        
    const goToItemHandler = (item) => {
        console.log(item);
        console.log(params.id)
        navigate('/item')
    }

    return (
        <div className="items">
            <MenuBar />
            <div className="itemTitle">
                <Card className="bg-dark text-white" style={{width: 'auto', height: '10rem'}}>
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                        <Card.ImgOverlay>
                        <Card.Title>Item Title</Card.Title>
                        <Card.Text className="d-none">Some text here</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className="itemsContainer">
                <div className="itemWrapper d-flex justify-content-center align-items-center">
                    {items.map(item => (
                        <Card className="mx-2 mt-4 bg-dark text-white" style={{width: '12rem', height: '15rem'}} key={item.id}>
                            <Card.Img style={{height: '15rem'}} src="holder.js/100px270" alt="Card image" />
                            <Card.ImgOverlay style={{top: 'auto'}}>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text className="d-none">Some text here</Card.Text>
                                <Button variant="light" onClick={() => goToItemHandler(item)}>Go somewhere</Button>
                            </Card.ImgOverlay>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Items;