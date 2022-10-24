import React from "react";
import './BlizkyPriatel.css';

const BlizkyPriatel = ({user}) => {
    return (
        <li className="blizkyPriatel">
            <img className="blizkyPriatelImg" src={user.profilePicture} alt="" />
            <span className="blizkyPriatelMeno">{user.username}</span>
        </li>
    );
}
 
export default BlizkyPriatel;