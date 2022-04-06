import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './Signin.css'

const authenticate = () => {
    const AuthenticateSchema = Yup.object().shape({
        // firstName: Yup.string()
        //     .min(2, 'Too Short!')
        //     .max(50, 'Too Long!')
        //     .required('Required'),
        // lastName: Yup.string()
        //     .min(2, 'Too Short!')
        //     .max(50, 'Too Long!')
        //     .required('Required'),
        email: Yup.string().email('Invalid email').required('Email required.'),
        password: Yup.string()
            .required('password required.') 
            .min(8, 'Password is too short - at least 8 characters.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    });
    return (
        <div className="formWrapper">
            <Formik
                initialValues={{
                // firstName: '',
                // lastName: '',
                email: '',
                password: ''
            }}
                validationSchema={AuthenticateSchema}
                onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}>
                {({ errors, touched }) => (
                    <Form className="form">
                        <label id="email" htmlFor="email">Email</label>
                        <Field name="email" type="email" className="input" />
                        {errors.email && touched.email ? <small className="error">{errors.email}</small> : null}

                        <label id="password" htmlFor="password">Password</label>
                        <Field name="password" type="password" className="input" />
                        {errors.password && touched.password ? (
                            <small className="error">{errors.password}</small>
                        ) : null}

                        <Button className="mt-3" variant="primary" type="submit">Sign in</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


export default authenticate;