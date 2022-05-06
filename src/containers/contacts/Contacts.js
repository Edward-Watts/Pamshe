import React from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";

import './Contacts.css'
import MenuBar from "../../components/menuBar/MenuBar";


const Contacts = () => {
    return (
        <div className="Contact">
            <MenuBar />
            <div className="customerService">
                <Card className="bg-dark text-white" style={{width: 'auto', height: '15rem'}}>
                    <Card.Img style={{height: '15rem'}} src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Customer Service</Card.Title>
                        <Card.Text className="d-none">Some text here</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <Container>
                <Row className="mt-3">
                    <Col className="">
                        <h2>We're glad to assist you!</h2>
                        <p>
                            Delighting our customers is our priority. We listen to your requests and feedbacks
                            and respond in the earliest possible time. <strong>Feel free to use any of our contact options provided.</strong>     
                        </p>
                        <p>
                           +233(0)54 662 0587 or +233(0)24 747 3459
                        </p>
                        <Button className="text-white" variant="dark" href="mailto:eddiewattsadjei@gmail.com">eddiewattsadjei@gmail.com</Button>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <p>
                            Social media links    
                        </p>
                    </Col>
                </Row>
            </Container>   
        </div>
    )
}

export default Contacts;