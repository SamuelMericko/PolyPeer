import React from "react";
import './Login.css'
import { Person, Lock, ArrowUpward, Home } from '@mui/icons-material';
import Button from '@mui/material/Button';

const Login = () => {
    return (
        <div className="login">
            <img src="/images/logo.svg" alt="Polypeer_logo" className="loginLogo" width="70%" />

            <div className="loginForm">
                <div className="loginFormPole">
                    <Person className="loginIcon"/>
                    <input type="text" placeholder="Prihlasovacie meno" />
                </div>
                <div className="loginFormPole">
                    <Lock className="loginIcon"/>
                    <input type="password" placeholder="Heslo" />
                    <br />
                </div>
                <br />
                <span> <a href="https://portal.edupage.org/" className="loginZabudnuteHeslo">Zabudli ste heslo?</a></span>
                <br />
                <Button variant="contained" type="submit" endIcon={<ArrowUpward />} size="large" className="loginSubmitButton">Odoslať</Button>
                <footer>
                    <div className="loginFooterButton">
                        <Button href="/" size="large" variant="outlined"><Home /></Button>
                    </div>
                </footer>
            </div>
        </div>
    );
}
 
export default Login;