import React from "react";
import './Prihlasenie.css';
import { Person, Lock, ArrowUpward, Home } from '@mui/icons-material';
import Button from '@mui/material/Button';

const Prihlasenie = () => {

    return (
        <div className="prihlasenieWrapper">
            <div className="leftbar">
                <div className="leftbarText">
                    <h1 className="leftbarItem">Vitajte v PolyPeer!</h1>
                    <p className= "leftbarItem">Podeľte sa o svoje zážitky s priateľmi a spolužiakmi!</p>
                </div>
                <div className="leftbarIllustracia">
                    <img src="/images/social.svg" alt="" width="80%"/>
                </div>
            </div>
            <div className="rightbar">
                <img src="/images/logo.svg" alt="Polypeer_logo" className="rightbarLogo" width="70%"/>

                <div className="rightbarForm">
                    <div className="rightbarFormPole">
                        <Person className="rightbarLoginIcon"/>
                        <input type="text" placeholder="Prihlásovacie meno" />
                    </div>
                    <div className="rightbarFormPole">
                        <Lock className="rightbarLoginIcon"/>
                        <input type="password" placeholder="Heslo" />
                        <br />
                    </div>
                    <br />
                    <span> <a href="https://portal.edupage.org/" className="rightbarZabudnuteHeslo">Zabudli ste heslo?</a></span>
                    <br />
                    <Button variant="contained" endIcon={<ArrowUpward />} size="large" className="rightbarSubmitButton">Odoslať</Button>
                    <footer>
                        <div className="footerButton">
                            <Button href="https://soshe.edupage.org/" size="large" variant="outlined"><Home /></Button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
 
export default Prihlasenie;