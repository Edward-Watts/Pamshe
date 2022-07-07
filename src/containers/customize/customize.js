import React, {useState} from "react";

import { Button, Tabs, Tab, Container, Card, Row, Col } from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import MenuBar from "../../components/menuBar/MenuBar";
import './customize.css';

const Customize = () => {
    const [key, setKey] = useState('male');

    const maleSchema = Yup.object().shape({
        firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name is required.'),
        lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name is required.'),
        shoulder: Yup.number().required('Shoulder length is required.'),
        chest: Yup.number().required('Chest length is required.'),
        naturalWaist: Yup.number().required('Natural Waist is required'),
        password: Yup.string()
            .required('Password is required.') 
            .min(8, 'Password is too short - at least 8 characters.'),
        confirmPassword: Yup.string()
            .required('Confirm password!') 
            .min(8, 'Password is too short - at least 8 characters.')
    });



    return (
        <div>
            <MenuBar />
            <div className="customize">
                <Card className="bg-dark text-white" style={{width: 'auto', height: '100%'}}>
                    <Card.Img style={{height: '100%'}} src={require("../../assets/background/cs2.jpg")} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title></Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <Container>
                <div className="text-white mt-4">
                    <h3 style={{color: '#FFCB97'}}>Customize your favorite apparel!</h3>
                    <p>Fill the form below with your measurement carefully taken or reach out to our <a className="cusLink" href="customer-service">customer service</a> team for assistance.</p>
                    <p><strong>Measurements should be in inches only. See size guide</strong></p>
                </div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                >
                <Tab eventKey="male" title="Male">
                    <Formik
                            initialValues={{
                            firstName: 'Edward',
                            lastName: '',
                            shoulder: '',
                            chest: '',
                            naturalWaist: '',
                            lowerWaist: '',
                            hips: '',
                            sleevesOutseam: ''
                        }}
                        validationSchema={maleSchema}
                        onSubmit={values => {
                        // same shape as initial values
                            console.log(values)
                        
                        }}>
                        {({ errors, touched }) => (
                            <div className="formWrapper mt-4 d-flex justify-content-center align-items-center">
                                <Form className="w-100">
                                    <Row>
                                        <Col className="d-grid aligh-items-center">
                                            <label id="firstName" htmlFor="firstname">First name</label>
                                            <Field name="firstName" type="text" className="input" />
                                            {errors.firstName && touched.firstName ? <small className="error">{errors.firstName}</small> : null}
                                        </Col>
                                        <Col className="d-grid aligh-items-center">
                                            <label id="lastName" htmlFor="lastname">Last name</label>
                                            <Field name="lastName" type="text" className="input" />
                                            {errors.lastName && touched.lastName ? <small className="error">{errors.lastName}</small> : null}
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col className="d-grid aligh-items-center">
                                            <label id="shoulder" htmlFor="shoulder">Shoulder</label>
                                            <Field name="shoulder" type="number" className="input" />
                                            {errors.shoulder && touched.shoulder ? <small className="error">{errors.shoulder}</small> : null}

                                            <label id="chest" htmlFor="chest">Chest</label>
                                            <Field name="chest" type="number" className="input" />
                                            {errors.chest && touched.chest ? <small className="error">{errors.chest}</small> : null}
                                            <label id="naturalWaist" htmlFor="naturalwaist">Natural Waist</label>
                                            <Field name="naturalWaist" type="number" className="input" />
                                            {errors.naturalWaist && touched.naturalWaist ? (<small className="error">{errors.naturalWaist}</small>) : null}
                                        </Col>

                                        <Col className="d-grid aligh-items-center">
                                            <label id="lowerWaist" htmlFor="lowerwaist">Lower Waist</label>
                                            <Field name="lowerWaist" type="password" className="input" />
                                            {errors.lowerWaist && touched.lowerWaist ? (<small className="error">{errors.lowerWaist}</small>) : null}
                                            
                                            <label id="hips" htmlFor="hips">Hips</label>
                                            <Field name="hips" type="password" className="input" />
                                            {errors.hips && touched.hips ? (<small className="error">{errors.hips}</small>) : null}

                                            <label id="confirmPassword" htmlFor="confirmpassword">Confirm password</label>
                                            <Field name="confirmPassword" type="password" className="input" />
                                            {errors.confirmPassword && touched.confirmPassword ? (<small className="error">{errors.confirmPassword}</small>) : null}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="d-flex justify-content-center aligh-items-center">
                                            <Button className="my-4 px-4" variant="primary" type="submit"> Submit </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </Tab>
                <Tab eventKey="female" title="Female">
                    <Formik
                            initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            confirmPassword:''
                        }}
                        validationSchema={maleSchema}
                        onSubmit={values => {
                        // same shape as initial values
                            console.log(values)
                        
                        }}>
                        {({ errors, touched }) => (
                            <div className="formWrapper mt-4 d-flex justify-content-center align-items-center">
                                <Form className="">
                                    <Row>
                                        <Col className="d-grid justify-content-center aligh-items-center">
                                        
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="d-grid justify-content-center aligh-items-center">
                                        <label id="firstName" htmlFor="firstname">First name</label>
                                        <Field name="firstName" type="text" className="input" />
                                        {errors.firstName && touched.firstName ? <small className="error">{errors.firstName}</small> : null}

                                        <label id="lastName" htmlFor="lastname">Last name</label>
                                        <Field name="lastName" type="text" className="input" />
                                        {errors.lastName && touched.lastName ? <small className="error">{errors.lastName}</small> : null}

                                        <label id="email" htmlFor="email">Email</label>
                                        <Field name="email" type="email" className="input" />
                                        {errors.email && touched.email ? <small className="error">{errors.email}</small> : null}
                                        </Col>

                                        <Col className="d-grid justify-content-center aligh-items-center">
                                        <label id="password" htmlFor="password">Password</label>
                                        <Field name="password" type="password" className="input" />
                                        {errors.password && touched.password ? (<small className="error">{errors.password}</small>) : null}

                                        <label id="confirmPassword" htmlFor="confirmpassword">Confirm password</label>
                                        <Field name="confirmPassword" type="password" className="input" />
                                        {errors.confirmPassword && touched.confirmPassword ? (<small className="error">{errors.confirmPassword}</small>) : null}
                                        
                                        <label id="confirmPassword" htmlFor="confirmpassword">Confirm password</label>
                                        <Field name="confirmPassword" type="password" className="input" />
                                        {errors.confirmPassword && touched.confirmPassword ? (<small className="error">{errors.confirmPassword}</small>) : null}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="d-flex justify-content-center aligh-items-center">
                                            <Button className="my-4 px-4" variant="primary" type="submit"> Submit </Button>
                                            <Button className="my-4 px-4" variant="primary-outlined" type="submit"> Submit </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </Tab>
            </Tabs>
            </Container>
        </div>
    )
}


export default Customize;