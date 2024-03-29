import React, { useContext, useEffect, useRef, useState } from "react";
import './Chat.css';
import { Button } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import {io} from 'socket.io-client';

// Komponenty
import Topbar from '../../components/Topbar/Topbar';
import Konverzacia from "../../components/Konverzacia/Konverzacia";
import Sprava from "../../components/Sprava/Sprava";
import ChatOnline from "../../components/ChatOnline/ChatOnline";

const Chat = () => {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const { user } = useContext(AuthContext);
    const scrollRef = useRef();

    useEffect(() => {
    socket.current = io("ws://localhost:8900", {
      transports: ['websocket'],
      upgrade: false
    });
    
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
        });
      });
    }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user, currentChat]);

  
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
  
    useEffect(() => {
      const getMessages = async () => {
        try {
          const res = await axios.get("/messages/" + currentChat?._id);
          setMessages(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getMessages();
    }, [currentChat]);

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const message = {
        sender: user._id,
        text: newMessage,
        conversationId: currentChat._id,
      };
  
      const receiverId = currentChat.members.find(
        (member) => member !== user._id
      );
  
      socket.current.emit("sendMessage", {
        senderId: user._id,
        receiverId,
        text: newMessage,
      });
  
      try {
        const res = await axios.post("/messages", message);
        setMessages([...messages, res.data]);
        setNewMessage("");
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    
    return (
        <>
            <Topbar />
            <div className="chat">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input type="text" placeholder="Nájdite svojich priateľov" className="chatMenuInput"/>
                        {conversations.map(c => (
                            <div onClick={() => setCurrentChat(c)}>
                                <Konverzacia conversation={c} currentUser={user}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {currentChat ? (
                        <>
                            <div className="chatBoxHore">
                                {messages.map(m=>(
                                    <div ref={scrollRef}>
                                        <Sprava message={m} vlastna={m.sender === user._id}/>
                                    </div>
                                ))}
                            </div>
                            <div className="chatBoxDole">
                                <textarea className="chatSpravaInput" placeholder="Napíšte niečo..." onChange={(e) => setNewMessage(e.target.value)} value={newMessage}></textarea>
                                <Button className="chatOdoslat" variant="contained" onClick={handleSubmit}>Odoslať</Button>
                            </div>
                        </>
                        ):(
                            <p className="noConversationText">Ak chcete začať chatovať, kliknite na konverzáciu</p>
                        )}
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                    <ChatOnline
                      onlineUsers={onlineUsers}
                      currentId={user._id}
                      setCurrentChat={setCurrentChat}
                    />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Chat;