import React from "react";
import './Registracia.css';
import Register from "../../components/Register/Register";

const Registracia = () => {
    return (
        <div className="registraciaWrapper">
            <div className="registracia">
                <div className="registraciaText">
                    <h1 className="registraciaItem">Vitajte v PolyPeer!</h1>
                    <p className= "registraciaItem">Podeľte sa o svoje zážitky s priateľmi a spolužiakmi!</p>
                </div>
                <div className="registraciaIllustracia">
                    <img src="/images/social.svg" alt="Fotografia_cloveka" width="80%"/>
                </div>
            </div>
            <Register />
        </div>
    );
}
 
export default Registracia;