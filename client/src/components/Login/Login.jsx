import React, { useContext } from "react";
import './Login.css'
import { Email, Lock, ArrowUpward} from '@mui/icons-material';
import Button from '@mui/material/Button';
import axios from "axios";
import { useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";

const Login = () => {
    const email = useRef();
    const heslo = useRef();
    const {isFetching, dispatch} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleClick = (e) => {
        const handleError = async () => {
            const error = await axios.get('/auth/login/error');
            setError(error.data);
            console.log(error.data);
        }

        e.preventDefault();
        loginCall({email:email.current.value, heslo:heslo.current.value}, dispatch);
        handleError()
    }

    return (
        <div className="login">
            <img src="/images/logo.svg" alt="Polypeer_logo" className="loginLogo" width="70%" />

            <form className="loginForm" onSubmit={handleClick}>
                <div className="loginFormPole">
                    <Email className="loginIcon"/>
                    <input type="email" placeholder="Email" ref={email} required/>
                </div>
                <div className="loginFormPole">
                    <Lock className="loginIcon"/>
                    <input type="password" placeholder="Heslo" ref={heslo} minLength={8} required/>
                    <br />
                </div>
                {error && (
                    <div className="loginError">
                        <p className="loginErrorText">{error}</p>
                    </div>
                )}
                <br />
                <span> <a href="/login" className="loginZabudnuteHeslo">Zabudli ste heslo?</a></span>
                <br />
                <Button variant="contained" color="primary" type="submit" endIcon={<ArrowUpward />} size="large" disabled={isFetching} className="loginSubmitButton">{isFetching ? <CircularProgress color='inherit' size={20}/> : "Odoslať"}</Button>
                <br />
                <Button variant="contained" color="secondary" href="/registracia" endIcon={<ArrowUpward />} size="medium" disabled={isFetching} className="loginRegisterButton">{isFetching ? <CircularProgress color='inherit' size={20}/> : "Vytvoriť si účet"}</Button>

            </form>
        </div>
    );
}
 
export default Login;