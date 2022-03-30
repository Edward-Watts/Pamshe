import React from "react";
import { Navbar,Nav,Container,NavDropdown } from "react-bootstrap";
import './Navigation.css';


const navigation = (props) => {
    return (
        <div className="navContainer">
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Pamshe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Shop</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div> 
    );
};


export default navigation;