import React from 'react';
import './Share.css';
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material';
 
const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                    <input placeholder="Napíšte nám niečo!" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareDetaily">
                        <div className="shareDetail">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareDetailText">Photo / Video</span>
                        </div>
                        <div className="shareDetail">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareDetailText">Tag</span>
                        </div>
                        <div className="shareDetail">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareDetailText">Lokácia</span>
                        </div>
                        <div className="shareDetail">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareDetailText">Emoji</span>
                        </div>
                    </div>
                    <button className="shareButton">Odoslať</button>
                </div>
            </div>
        </div>
    )
}
 
export default Share;