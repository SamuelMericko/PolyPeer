import React, { useContext } from "react";
import './Login.css'
import { Email, Lock, ArrowUpward} from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const email = useRef();
    const heslo = useRef();
    const {isFetching, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email:email.current.value, heslo:heslo.current.value}, dispatch);
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