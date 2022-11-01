import React from "react";
import './Sprava.css';
import {format} from 'timeago.js';

const Sprava = ({message, vlastna}) => {
    return (
        <div className={vlastna  ? "sprava vlastna" : "sprava"}>
            <div className="spravaHore">
                <img className="spravaImg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwritestylesonline.com%2Fwp-content%2Fuploads%2F2016%2F08%2FFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg&f=1&nofb=1&ipt=05b95ab2eb10727742e3923f1c0329b34351893e42049949a39823e6d2840032&ipo=images" alt="" />
                <p className="spravaText">{message.text}</p>
            </div> 
            <div className="spravaDole">
                {format(message.createdAt)}
            </div>
        </div>
    );
}
 
export default Sprava;