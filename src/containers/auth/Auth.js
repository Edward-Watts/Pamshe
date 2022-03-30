import React, {useState} from "react";

const auth = (props) => {
    const [userState, setUserState] = useState({
        User: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
            token:'',
            isAuth: ''
        }
    });
    return (
        <div className="formContainer">
            <h2>Login and Registration forms come here!</h2>
        </div>
    )
}


export default auth;