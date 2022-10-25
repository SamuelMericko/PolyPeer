import React from "react";
import './Domov.css';

// Komponenty
import Leftbar from '../../components/Leftbar/Leftbar';
import Prispevky from '../../components/Prispevky/Prispevky';
import RightbarDomov from "../../components/Rightbar/RightbarDomov/RightbarDomov";
import Topbar from "../../components/Topbar/Topbar";


const Domov = () => {
    return (
        <>
            <Topbar />
            <div className="domovContainer">
                <Leftbar />
                <Prispevky />
                <RightbarDomov />
            </div>
        </>
    );
}
 
export default Domov;