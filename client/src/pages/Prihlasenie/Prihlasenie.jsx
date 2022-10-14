import React from "react";
import './Prihlasenie.css';
import Login from "../../components/Login/Login";

const Prihlasenie = () => {

    return (
        <div className="prihlasenieWrapper">
            <div className="prihlasenie">
                <div className="prihlasenieText">
                    <h1 className="prihlasenie;Item">Vitajte v PolyPeer!</h1>
                    <p className= "prihlasenieItem">Podeľte sa o svoje zážitky s priateľmi a spolužiakmi!</p>
                </div>
                <div className="prihlasenieIllustracia">
                    <img src="/images/social.svg" alt="Fotografia_cloveka" width="80%"/>
                </div>
            </div>
            <Login />
        </div>
    );
}
 
export default Prihlasenie;