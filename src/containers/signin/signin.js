import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Alert,Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import * as types from '../../store/actions/Auth';

import './signin.css';


const Signin = () => {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    let loading = useSelector(state => state.auth.loading)
    let errorMessage = useSelector(state => state.auth.error)

    const signInSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required.'),
        password: Yup.string()
            .required('Password is required.') 
            .min(8, 'Password is too short - at least 8 characters.')
    });

    const signInHandler = (values) => {
        const signInData = {
            email: values.email,
            password: values.password,
            returnSecureToken: true
        }

        dispatch(types.authStart())

        const endpoint = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAo7z8hsknLPXExnUIPpHBRSp9OtVHbo74"

        axios.post(endpoint, signInData)
        .then(res => {
            if (res){
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);

                localStorage.setItem('token', res.data.idToken)
                localStorage.setItem('expirationDate', expirationDate)
            
                dispatch(types.authSignInSuccess(res.data.idToken))
            }
            navigate('/home')

            // if(res){
            //     window.onbeforeunload = function() { return "Your work will be lost."; };
            // }

        })
        .catch(err => {
            if(err) {
                setShow(true)
                dispatch(types.authFail(err.message))
            }
        })       
    }

    let btnText = 'Sign in';
    if(loading){
        btnText = 'Loading';
    }


    return (
        <div className="back">
            <Formik
                initialValues={{
                email: '',
                password: ''
                }}
                validationSchema={signInSchema}
                onSubmit={values => signInHandler(values)}>
                {({ errors, touched }) => (
                    <div className="signinFormWrapper d-flex justify-content-center align-items-center">
                        <div className="text my-4">
                            <h1>Signin to enjoy amazing offers!</h1> 
                        </div>
                        <Form className="form">
                            {show ? 
                            <Alert variant="danger" className="text-center">
                                <p className="mb-0">{errorMessage}</p>
                            </Alert> : null}
                            <label id="email" htmlFor="email">Email</label>
                            <Field name="email" type="email" className="input" />
                            {errors.email && touched.email ? <small className="error">{errors.email}</small> : null}

                            <label id="password" htmlFor="password">Password</label>
                            <Field name="password" type="password" className="input" />
                            {errors.password && touched.password ? (<small className="error">{errors.password}</small>) : null}
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
                        <div className="mt-4">
                            New here? <a className="signLink" href="signup">Create an account</a>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
    
}

export default Signin;
