import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './signin.css';


const signin = () => {

    const signInSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required.'),
        password: Yup.string()
            .required('Password is required.') 
            .min(8, 'Password is too short - at least 8 characters.')
    });

    return (
        <div className="back">
           <Formik
                initialValues={{
                email: '',
                password: ''
                }}
                validationSchema={signInSchema}
                onSubmit={values => {
                // same shape as initial values
                    console.log(values)
                
                }}>
                {({ errors, touched }) => (
                    <div className="formWrapper d-flex justify-content-center align-items-center">
                        <div className="text">
                            <h1>Signin to enjoy amazing offers!</h1> 
                        </div>
                        <Form className="form">
                            <label id="email" htmlFor="email">Email</label>
                            <Field name="email" type="email" className="input" />
                            {errors.email && touched.email ? <small className="error">{errors.email}</small> : null}

                            <label id="password" htmlFor="password">Password</label>
                            <Field name="password" type="password" className="input" />
                            {errors.password && touched.password ? (<small className="error">{errors.password}</small>) : null}
                            <Button className="mt-4" variant="primary" type="submit"> Sign in </Button>
                        </Form>
                        <div className="mt-4">
                            New here? <a className="signLink" href="signup">Create an account</a>
                        </div>
                    </div>
                )}
           </Formik>
        </div>
    );
    
}

export default signin;