import React from "react";
import './Chat.css';
import { Button } from "@mui/material";

// Komponenty
import Topbar from '../../components/Topbar/Topbar';
import Konverzacia from "../../components/Konverzacia/Konverzacia";
import Sprava from "../../components/Sprava/Sprava";
import ChatOnline from "../../components/ChatOnline/ChatOnline";


const Chat = () => {
    return (
        <>
            <Topbar />
            <div className="chat">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input type="text" placeholder="Nájdite svojich priateľov" className="chatMenuInput"/>
                        <Konverzacia />
                        <Konverzacia />
                        <Konverzacia />
                        <Konverzacia />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxHore">
                            <Sprava />
                            <Sprava vlastna={true} />
                            <Sprava />
                            <Sprava />
                            <Sprava vlastna={true} />
                            <Sprava />
                            <Sprava />
                            <Sprava vlastna={true} />
                            <Sprava />
                            <Sprava />
                            <Sprava vlastna={true} />
                            <Sprava />
                            <Sprava />
                            <Sprava vlastna={true} />
                            <Sprava />
                        </div>
                        <div className="chatBoxDole">
                            <textarea className="chatSpravaInput" placeholder="Napíšte niečo..."></textarea>
                            <Button className="chatOdoslat" variant="contained">Odoslať</Button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Chat;