import React from "react";
import './Prihlasenie.css';

const Prihlasenie = () => {
    return (
        <div className="prihlasenieWrapper">
            <div className="leftbar">
                <div className="leftbarText">
                    <h1 class="leftbarItem">Vitajte v PolyPeer</h1>
                    <p class= "leftbarItem">Podeľte sa o svoje zážitky s priateľmi a spolužiakmi!</p>
                </div>
            </div>
            <div className="rightbar">
                <img src="../../../public/images/pozadie-login.jpg" alt="" width="500px" height="500px"/>

                <div className="rightbarForm">
                    <h1 class="rightbarFormNazov">Prihláste sa!</h1>
                </div>
            </div>
        </div>
    );
}
 
export default Prihlasenie;