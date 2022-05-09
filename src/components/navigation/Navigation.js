import React from "react";
import { Navbar,Nav,Container} from "react-bootstrap";

import './Navigation.css';


const navigation = (props) => {
    return (
        <div className="navContainer">
            <Navbar expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className="title" href="/">Pamshe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" defaultActiveKey="">
                            <Nav.Link className="navLink px-3" href="/customer-service">Customer Service</Nav.Link>
                            <Nav.Link className="navLink px-3" href="/signin">Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div> 
    );
};


export default navigation;