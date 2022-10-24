import React from "react";
import './BlizkiPriatel.css';

const BlizkiPriatel = ({user}) => {
    return (
        <li className="blizkiPriatel">
            <img className="blizkiPriatelImg" src={user.profilePicture} alt="" />
            <span className="blizkiPriatelMeno">{user.username}</span>
        </li>
    );
}
 
export default BlizkiPriatel;