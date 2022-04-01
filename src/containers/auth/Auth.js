import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import './Auth.css';

import Signin from "../../components/signin/Signin";

const auth = (props) => {
    return (
        <div className="Auth">
            <Container>
                <Row>
                    <Col className="shopImage d-none d-lg-block">
                        <img src={require("../../assets/shopbags/shopbags.jpg")} className="Image" alt="shopbags"/>
                    </Col>
                    <Col className="formContainer">
                        <div>
                            <h1>Sign in to enjoy amazing offers!</h1> 
                        </div>
                        <div className="">
                            <Signin />
                        </div>
                        
                        <div className="mt-4">
                            <small>New here? <a href="#" className="signUp">Sign up</a></small> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default auth;