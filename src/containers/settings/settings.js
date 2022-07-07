import React, {useState} from "react";

import { Button, Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './settings.css';
import MenuBar from "../../components/menuBar/MenuBar";



const Settings = () => {
    const [key, setKey] = useState('profile');

    const customizeSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First name is required.'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Last name is required.'),
        email: Yup.string().email('Invalid email!').required('Email is required.'),
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
            <Container>
                <div className="my-4" style={{color: '#FFCB97'}}>
                    <h1>Settings</h1>
                </div>
                <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                >
                    <Tab eventKey="profile" title="Profile">
                        <div className="text-white">
                            <h3 style={{color: '#FFCB97'}}>Change profile information</h3>
                            <p>Updating your profile information helps to improve our service delivery</p>
                        </div>
                        <Formik
                                initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                confirmPassword:''
                            }}
                            validationSchema={customizeSchema}
                            onSubmit={values => {
                            // same shape as initial values
                                console.log(values)
                            
                            }}>
                            {({ errors, touched }) => (
                                <div className="formWrapper mt-4 d-flex justify-content-center align-items-center">
                                    <Form className="">
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
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </Tab>
                    <Tab eventKey="changePassword" title="Change passsowrd">
                        <div className="text-white">
                            <h3 style={{color: '#FFCB97'}}>Change user password</h3>
                            <p>Updating your profile information helps to improve our service delivery</p>
                        </div>
                        <Formik
                                initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                confirmPassword:''
                            }}
                            validationSchema={customizeSchema}
                            onSubmit={values => {
                            // same shape as initial values
                                console.log(values)
                            
                            }}>
                            {({ errors, touched }) => (
                                <div className="formWrapper mt-4 d-flex justify-content-center align-items-center">
                                    <Form className="">
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

export default Settings;
