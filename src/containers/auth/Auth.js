import React, {useState} from "react";
import { Col, Container, Row} from "react-bootstrap";
import './Auth.css';

import AuthForm from "../../components/authForm/AuthForm";

const Auth = (props) => {
    const [regState, setRegState] = useState({
        reg: false,
        action: 'Sign up',
        status: 'New here?'
    });

    const checkAuthHandler = () => {
      if (regState.reg === false) {
        setRegState({
          reg: true,
          action: 'Sign in',
          status: 'Already here?'
        });
      }
      if (regState.reg === true) {
         setRegState({
          reg: false,
          action: 'Sign up',
          status: 'New here?'
        });
      }
    }

    return (
        <div className="Auth">
            <Container>
                <Row>
                    <Col className="shopImage d-none d-lg-block">
                        <img src="" className="Image" alt="shopbags"/>
                    </Col>
                    <Col className="formContainer">
                        <div>
                            <h1>{regState.reg === true ? 'Sign up' : 'Sign in'} to enjoy amazing offers!</h1> 
                        </div>
                        <div className="">
                            <AuthForm reg = {regState.reg} />
                        </div>
                        
                        <div className="mt-3">
                            <small>{regState.status} <span onClick={checkAuthHandler} className="checkAuth">{regState.action}</span></small> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Auth;