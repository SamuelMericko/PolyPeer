import React from "react";
import './BlizkyPriatel.css';
import { Link } from "react-router-dom";

const BlizkyPriatel = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const AVATAR = process.env.REACT_APP_AVATAR_FOLDER;

    return (
        <li className="blizkyPriatel">
            <Link to={`/profil/${user.meno}`} style={{textDecoration: "none", color:"black", display: "inline-block", justifyContent:"center"}}>
                <img className="blizkyPriatelImg" src={user.profilovka ? AVATAR+user.profilovka : PF+"noAvatar.png"} alt="" />
                <span className="blizkyPriatelMeno">{user.meno}</span>
            </Link>
        </li>
    );
}
 
export default BlizkyPriatel;