import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './signup.css';


const signup = () => {

    const signUpSchema = Yup.object().shape({
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
        <div className="back">
           <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword:''
                }}
                validationSchema={signUpSchema}
                onSubmit={values => {
                // same shape as initial values
                    console.log(values)
                
                }}>
                {({ errors, touched }) => (
                    <div className="formWrapper d-flex justify-content-center align-items-center">
                        <div className="text">
                            <h1>Signup to enjoy amazing offers!</h1> 
                        </div>
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
                            {errors.password && touched.password ? (<small className="error">{errors.password}</small>) : null}

                            <label id="confirmPassword" htmlFor="confirmpassword">Confirm password</label>
                            <Field name="confirmPassword" type="password" className="input" />
                            {errors.confirmPassword && touched.confirmPassword ? (<small className="error">{errors.confirmPassword}</small>) : null}

                            <Button className="mt-4" variant="primary" type="submit"> Sign up </Button>
                        </Form>
                        <div className="mt-4">
                            Already here? <a className="signLink" href="signin">Sign in</a>
                        </div>
                    </div>
                )}
           </Formik>
        </div>
    );
    
}

export default signup;