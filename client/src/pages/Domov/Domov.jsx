import React from "react";
import './Domov.css';

// Komponenty
import Leftbar from '../../components/Leftbar/Leftbar';
import Prispevky from '../../components/Prispevky/Prispevky';
import Rightbar from "../../components/Rightbar/Rightbar";
import Topbar from "../../components/Topbar/Topbar";


const Domov = () => {
    return (
        <>
            <Topbar />
            <div className="domovContainer">
                <Leftbar />
                <Prispevky />
                <Rightbar />
            </div>
        </>
    );
}
 
export default Domov;