import React, { useContext, useEffect, useState } from "react";
import './Chat.css';
import { Button } from "@mui/material";

// Komponenty
import Topbar from '../../components/Topbar/Topbar';
import Konverzacia from "../../components/Konverzacia/Konverzacia";
import Sprava from "../../components/Sprava/Sprava";
import ChatOnline from "../../components/ChatOnline/ChatOnline";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


const Chat = () => {
    const {user} = useContext(AuthContext);
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
          try {
            const res = await axios.get("/conversations/" + user._id);
            setConversations(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getConversations();
      }, [user._id]);
    

    return (
        <>
            <Topbar />
            <div className="chat">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input type="text" placeholder="Nájdite svojich priateľov" className="chatMenuInput"/>
                        {conversations.map(c => (
                            <Konverzacia conversation={c} currentUser={user}/>
                        ))}
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