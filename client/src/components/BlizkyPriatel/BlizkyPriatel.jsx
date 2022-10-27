import React from "react";
import './BlizkyPriatel.css';

const BlizkyPriatel = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    console.log(user.profilePicture);

    return (
        <li className="blizkyPriatel">
            <img className="blizkyPriatelImg" src={PF + user.profilePicture} alt="" />
            <span className="blizkyPriatelMeno">{user.username}</span>
        </li>
    );
}
 
export default BlizkyPriatel;