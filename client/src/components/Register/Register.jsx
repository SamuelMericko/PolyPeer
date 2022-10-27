import React from "react";
import './Register.css';
import { Person, Lock, ArrowUpward, Email, Password } from '@mui/icons-material';
import { useRef} from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from "axios";

const Register = () => {
    const meno = useRef();
    const email = useRef();
    const heslo = useRef();
    const hesloZnova = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if(hesloZnova.current.value !== heslo.current.value) {
            hesloZnova.current.setCustomValidity('Heslá sa nezhodujú')
        } else {
            const pouzivatel = {
                meno: meno.current.value,
                email: email.current.value,
                heslo: heslo.current.value
            }
            try {
                await axios.post('/auth/register', pouzivatel);
                navigate('/login');
                
            } catch (err) {
                console.log(err);
            } 
        }
    };

    return (
        <div className="register">
            <img src="/images/logo.svg" alt="Polypeer_logo" className="registerLogo" width="70%"/>

            <form className="registerForm" onSubmit={handleClick}>
                 {/* Prihlasovacie meno */}
                <div className="registerFormPole">
                    <Person className="registerIcon"/>
                    <input type="text" placeholder="Prihlasovacie meno" ref={meno} required minLength={3}/>
                </div>
                {/* Email */}
                <div className="registerFormPole">
                    <Email className="registerIcon"/>
                    <input type="email" placeholder="Email" ref={email} required/>
                    <br />
                </div>
                {/* Heslo */}
                <div className="registerFormPole">
                    <Lock className="registerIcon"/>
                    <input type="password" placeholder="Heslo" minLength={8} ref={heslo} required/>
                    <br />
                </div>
                {/* Zopakujte heslo */}
                <div className="registerFormPole">
                    <Lock className="registerIcon"/>
                    <input type="password" placeholder="Zopakujte heslo" minLength={8} ref={hesloZnova} required/>
                    <br />
                </div>
                <br />
                <Button variant="contained" type="submit" endIcon={<ArrowUpward />} size="large" className="registerSubmitButton">Registrovať sa</Button>
                <br />
                <Button variant="contained" endIcon={<ArrowUpward />} size="medium" color="secondary" className="registerLoginButton" href="/login">Prihlásiť sa</Button>
            </form>
        </div>
    );
}
 
export default Register;