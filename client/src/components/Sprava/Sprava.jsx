import React from "react";
import './Sprava.css';
import {format} from 'timeago.js';

const Sprava = ({message, vlastna}) => {
    return (
        <div className={vlastna  ? "sprava vlastna" : "sprava"}>
            <div className="spravaHore">
                <p className="spravaText">{message.text}</p>
            </div> 
            <div className="spravaDole">
                {format(message.createdAt)}
            </div>
        </div>
    );
}
 
export default Sprava;