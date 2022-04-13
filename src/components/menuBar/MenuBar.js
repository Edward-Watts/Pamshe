import React from "react";
import { Container, Dropdown } from "react-bootstrap";

import './MenuBar.css'


const menuBar = () => {
    return (
        <div className="menuBar d-flex align-items-center justify-content-center">
            <Container className="sub d-flex align-items-center justify-content-center">
                <div className="item mx-1">
                    <Dropdown>
                        <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{fontWeight: '500', color: 'inherit'}}>
                            Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Kente</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Kaftan</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Dashiki</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Kaba</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Habesha Kemis</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Djellaba</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Isiagu</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Toghu/Atoghu</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="item mx-1">
                    <h6>Customize</h6>
                </div>
                <div className="search mx-1">
                    <h6>Insert search component</h6>
                </div>
                <div className="item mx-1">
                    <h6>User</h6>
                </div>
                <div className="item mx-1">
                    <h6>Cart</h6>
                </div>
            </Container>
        </div>
    ) 
}

export default menuBar;