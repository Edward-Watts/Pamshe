import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import * as types from '../../store/actions/Auth';


import './signup.css';
import axios from "axios";


const Signup = () => {
    const [show, setShow] = useState(false);

    let navigate = useNavigate();
    const dispatch = useDispatch();
    let loading = useSelector(state => state.auth.loading)
    let errorMessage = useSelector(state => state.auth.error)

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

    const signUpHandler = (values) => {
        const signUpData = {
            email: values.email,
            password: values.password,
            returnSecureToken: true
        }

        dispatch(types.authStart())

        const endpoint = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAo7z8hsknLPXExnUIPpHBRSp9OtVHbo74"

        axios.post(endpoint, signUpData)
        .then(res => {
            if(res){
                dispatch(types.authSignUpSuccess(res.data.idToken))
                navigate('/signin')
            }
        })
        .catch(err => {
            if(err) {
                setShow(true)
                dispatch(types.authFail(err.message))
            }
        })       
    }

    let btnText = 'Sign up';
    if(loading){
        btnText = 'Loading';
    }

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
                onSubmit={values => {signUpHandler(values)}}>
                {({ errors, touched }) => (
                    <div className="formWrapper d-flex justify-content-center align-items-center">
                        <div className="text-center my-4">
                            <h1>Get started to enjoy amazing offers!</h1> 
                        </div>
                        <Form className="form">
                            {show ? 
                            <Alert variant="danger" className="text-center">
                                <p className="mb-0">{errorMessage}</p>
                            </Alert> : null}
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

                            {loading ? <Button className="mt-4" variant="primary" type="submit">
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />{btnText}</Button>
                            : <Button className="mt-4" variant="primary" type="submit">{btnText}</Button> 
                            }
                        </Form>
                        <div className="my-4">
                            Already here? <a className="signLink" href="signin">Sign in</a>
                        </div>
                    </div>
                )}
           </Formik>
        </div>
    );
    
}

export default Signup;