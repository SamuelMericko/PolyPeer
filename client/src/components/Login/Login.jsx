import React from "react";
import './Login.css'
import { Person, Lock, ArrowUpward} from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useRef } from "react";

const Login = () => {
    const email = useRef();
    const heslo = useRef();
    const handleClick = (e) => {
        e.preventDefault();
        console.log(email.current.value);
    }

    return (
        <div className="login">
            <img src="/images/logo.svg" alt="Polypeer_logo" className="loginLogo" width="70%" />

            <form className="loginForm" onSubmit={handleClick}>
                <div className="loginFormPole">
                    <Person className="loginIcon"/>
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
                <Button variant="contained" color="primary" type="submit" endIcon={<ArrowUpward />} size="large" className="loginSubmitButton">Odoslať</Button>
                <br />
                <Button variant="contained" color="secondary" href="/registracia" endIcon={<ArrowUpward />} size="medium" className="loginRegisterButton">Vytvoriť si účet</Button>
            </form>
        </div>
    );
}
 
export default Login;