import React from "react";
import { Navbar,Nav,Container} from "react-bootstrap";
import './Navigation.css';


const navigation = (props) => {
    return (
        <div className="navContainer">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand className="title" href="#home">Pamshe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" defaultActiveKey="">
                            <Nav.Link className="link px-3" href="#home">Shop Now</Nav.Link>
                            <Nav.Link className="link px-3" href="#link">Customer Service</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div> 
    );
};


export default navigation;