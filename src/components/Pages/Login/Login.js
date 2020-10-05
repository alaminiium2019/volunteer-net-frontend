import * as firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import gicon from "../../../images/logos/google.png";
import firebaseConfig from './firebase.config';
import './Login.css';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from)

            }).catch(error => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

//Added jwt
    const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            sessionStorage.setItem('token',idToken);
        })
        .catch(err => console.log(err))
    }


    return (
        <div className="container text-center loginform">
            <h2 className="pb-2">Login With</h2>

            <button className="form-control pb-3" onClick={handleGoogleSignIn}><img src={gicon} className="gicon" />Continue with Google</button>
            <p className="pt-2">Don't have an account? <Link to="/register">Create an account</Link></p>
        </div>
    );
};

export default Login;