import React from "react";
import './BlizkyPriatel.css';
import { Link } from "react-router-dom";

const BlizkyPriatel = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="blizkyPriatel">
            <Link to={`/profil/${user.meno}`}>
                <img className="blizkyPriatelImg" src={user.profilovka ? PF+user.profilovka : PF+"noAvatar.png"} alt="" />
                <span className="blizkyPriatelMeno">{user.meno}</span>
            </Link>
        </li>
    );
}
 
export default BlizkyPriatel;