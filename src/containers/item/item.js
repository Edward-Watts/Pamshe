import React from "react";
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


import './item.css';
import MenuBar from "../../components/menuBar/MenuBar";


const Item = () => {

    const deliverySchema = Yup.object().shape({
        address: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Delivery address is required.'),
        phoneNumber: Yup.number()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Phone number is required.'),
        payNumber: Yup.number()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Phone number is required.')
        
    });

    const momoPaymentSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required.'),
        password: Yup.string()
            .required('Password is required.') 
            .min(8, 'Password is too short - at least 8 characters.')
    });

    const visaPaymentSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required.'),
        password: Yup.string()
            .required('Password is required.') 
            .min(8, 'Password is too short - at least 8 characters.')
    });

    return (
        <div>
            <MenuBar />
            <div className="itemTitle">
                <Card className="bg-dark text-white" style={{width: 'auto', height: '100%'}}>
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                        <Card.ImgOverlay>
                        <Card.Title>Item Title</Card.Title>
                        <Card.Text className="d-none">Some text here</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <Container>
                <Row>
                    <Col className="signinFormWrapper d-flex align-items-center">
                        <Card className="mx-2 mt-4 bg-dark text-white" style={{width: '12rem', height: '15rem'}}>
                            <Card.Img style={{height: '15rem'}} src="holder.js/100px270" alt="Card image" />
                            <Card.ImgOverlay style={{top: 'auto'}}>
                                <Card.Title></Card.Title>
                                <Card.Text className="d-none">Some text here</Card.Text>
                                <Button variant="light" onClick="">Go somewhere</Button>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <div>
                            <Formik
                                initialValues={{
                                address: '',
                                phoneNumber: '',
                                payMethod: ''
                                }}
                                validationSchema={deliverySchema}
                                onSubmit={values => {
                                // same shape as initial values
                                    console.log(values)
                                
                                }}>
                                {({ errors, touched }) => (
                                    <div className="signinFormWrapper d-flex align-items-center">
                                        <div className="text my-4">

                                        </div>
                                        <Form className="form">
                                            <label id="address" htmlFor="address">Delivery address</label>
                                            <Field name="address" type="text" className="input" />
                                            {errors.address && touched.address ? <small className="error">{errors.address}</small> : null}

                                            <label id="phoneNumber" htmlFor="phonenumber">Phone Number</label>
                                            <Field name="phoneNumber" type="number" className="input" />
                                            {errors.phoneNumber && touched.phoneNumber ? <small className="error">{errors.phoneNumber}</small> : null}
                                            <hr />

                                            <label id="payMethod" htmlFor="paymentmethod">Payment Method</label>
                                            <Field as="select" name="payMethod" className="input">
                                                <option value="">Select payment method</option>
                                                <option value="MTN Momo">MTN Momo</option>
                                                <option value="Vodafone Cash">Vodafone Cash</option>
                                                <option value="AirtelTigo">AirtelTigo</option>
                                            </Field>

                                            <label id="payNumber" htmlFor="paynumber">Phone Number</label>
                                            <Field name="payNumber" type="number" className="input" />
                                            {errors.payNumber && touched.payNumber ? <small className="error">{errors.payNumber}</small> : null}
                                           <Button className="mt-4" variant="primary" type="submit"> Pay </Button>
                                        </Form>
                                        <div className="mt-4">

                                        </div>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Item;