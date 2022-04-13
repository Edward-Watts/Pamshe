import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import './Contacts.css'
import MenuBar from "../../components/menuBar/MenuBar";


const Contacts = () => {
    return (
        <div className="Contact">
            <MenuBar />
            <Container>
                <Row className="mt-3">
                    <Col className="">
                    <h2>We're glad to assist you!</h2>
                    <p>
                        Some Text Here     
                    </p>
                    <p>
                        Some Text Here     
                    </p>
                    <p>
                        Some Text Here     
                    </p>
                    </Col>
                    <Col className="">
                        <h2>We're glad to assist you!</h2>
                        <p>
                            Some Text Here     
                        </p>
                    </Col>
                </Row>
            </Container>
            
                
        </div>
    )
}

export default Contacts;