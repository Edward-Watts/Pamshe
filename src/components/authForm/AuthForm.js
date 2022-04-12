import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './AuthForm.css'

const authenticate = (props) => {
    const signUpSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First name is required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Last name is required'),
        email: Yup.string().email('Invalid email').required('Email is required.'),
        password: Yup.string()
            .required('Password is required.') 
            .min(8, 'Password is too short - at least 8 characters.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    });
    const signInSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required.'),
        password: Yup.string()
            .required('Password is required.') 
            .min(8, 'Password is too short - at least 8 characters.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    });

    return (
        <div className="formWrapper">
            <Formik
                initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }}
                validationSchema={props.reg === true ? signUpSchema : signInSchema}
                onSubmit={values => {
                // same shape as initial values
                console.log(values, props.reg)
                
            }}>
                {({ errors, touched }) => (
                  <div className="d-flex justify-content-center align-items-center">
                    {props.reg === true ? 
                      <Form className="form">
                        <label id="firstName" htmlFor="firstname">First name</label>
                        <Field name="firstName" type="text" className="input" />
                        {errors.firstName && touched.firstName ? <small className="error">{errors.firstName}</small> : null}

                        <label id="lastName" htmlFor="lastname">Last name</label>
                        <Field name="lastName" type="text" className="input" />
                        {errors.lastName && touched.lastName ? <small className="error">{errors.lastName}</small> : null}

                        <label id="email" htmlFor="email">Email</label>
                        <Field name="email" type="email" className="input" />
                        {errors.email && touched.email ? <small className="error">{errors.email}</small> : null}

                        <label id="password" htmlFor="password">Password</label>
                        <Field name="password" type="password" className="input" />
                        {errors.password && touched.password ? (
                            <small className="error">{errors.password}</small>
                        ) : null}

                        <Button className="mt-3" variant="primary" type="submit"> Sign up </Button>
                    </Form> : 
                    <Form className="form">
                        <label id="email" htmlFor="email">Email</label>
                        <Field name="email" type="email" className="input" />
                        {errors.email && touched.email ? <small className="error">{errors.email}</small> : null}

                        <label id="password" htmlFor="password">Password</label>
                        <Field name="password" type="password" className="input" />
                        {errors.password && touched.password ? (
                            <small className="error">{errors.password}</small>
                        ) : null}

                        <Button className="mt-3" variant="primary" type="submit"> Sign in </Button>
                    </Form>
                    }
                  </div>
                )}
            </Formik>
        </div>
    )
}


export default authenticate;