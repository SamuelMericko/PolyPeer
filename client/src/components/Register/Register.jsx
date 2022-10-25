import React from "react";
import './Register.css';
import { Person, Lock, ArrowUpward, Email } from '@mui/icons-material';
import Button from '@mui/material/Button';

const Register = () => {
    return (
        <div className="register">
            <img src="/images/logo.svg" alt="Polypeer_logo" className="registerLogo" width="70%"/>

            <div className="registerForm">
                 {/* Prihlasovacie meno */}
                <div className="registerFormPole">
                    <Person className="registerIcon"/>
                    <input type="text" placeholder="Prihlasovacie meno" />
                </div>
                {/* Email */}
                <div className="registerFormPole">
                    <Email className="registerIcon"/>
                    <input type="email" placeholder="Email" />
                    <br />
                </div>
                {/* Heslo */}
                <div className="registerFormPole">
                    <Lock className="registerIcon"/>
                    <input type="password" placeholder="Heslo" />
                    <br />
                </div>
                {/* Zopakujte heslo */}
                <div className="registerFormPole">
                    <Lock className="registerIcon"/>
                    <input type="password" placeholder="Zopakujte heslo" />
                    <br />
                </div>
                <br />
                <Button variant="contained" type="submit" endIcon={<ArrowUpward />} size="large" className="registerSubmitButton">Registrovať sa</Button>
                <br />
                <Button variant="contained" type="submit" endIcon={<ArrowUpward />} size="medium" color="secondary" className="registerLoginButton" href="/login">Prihlásiť sa</Button>
            </div>
        </div>
    );
}
 
export default Register;