import React from "react";
import HashLoader from 'react-spinners/HashLoader';

const Nacitavanie = () => {
        return (
        <div className="loader">
            <img src="/images/logo.svg" alt="Polypeer_logo" className="logo" width="40%"/>
            <HashLoader color="#00B0E6" size={100} className="loader" />
        </div>
    );
}
 
export default Nacitavanie;