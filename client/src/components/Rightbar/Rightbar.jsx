import React, { useContext, useEffect, useRef, useState } from 'react';
import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/Online';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import ChatOnline from '../ChatOnline/ChatOnline';
import ChatOnlineRightbar from './ChatOnlineRightbar/ChatOnlineRightbar';
import {io} from 'socket.io-client';

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const AVATAR = process.env.REACT_APP_AVATAR_FOLDER;
  const [friends, setFriends] = useState([]);
  const {user:currentUser, dispatch} = useContext(AuthContext);
  const [followed, setFollowed] = useState(false);
  const socket = useRef();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id)); 
  }, [currentUser, user?._id]);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
        });
      });
    }, []);

  useEffect(() => {
    socket.current.emit("addUser", currentUser._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        currentUser.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [currentUser]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/pouzivatelia/friends/" + currentUser?._id)
        setFriends(friendList.data);
      } catch(err) {
      }
    };
    getFriends();
  }, [currentUser?._id]);

  const handleClick = async () => {
    try {
      if(followed) {
        await axios.put(`/pouzivatelia/${user._id}/unfollow`, {userId: currentUser._id});
        dispatch({type: "UNFOLLOW", payload:user._id});
      } else {
        await axios.put("/pouzivatelia/"+user._id+"/follow", {userId: currentUser._id});
        dispatch({type:"FOLLOW", payload:user._id});
      }
      setFollowed(!followed);
    } catch(err) {
      console.log(err)
    }
  }

  const DomovRightBar = () => {
    return(
        <>  
            <div className="rightbarWrapper">
                <div className="rightbar">
                    <div className="homeRightbarWrapper">
                        <div className="ilustraciaWrapper">
                            <img src="/images/rightbarIlustracia.jpg" alt="kavaIlustracia" className='rightbarIlustracia'/>
                        </div>  
                        <hr className="rightbarBreak"/>
                        <h4 className="rightbarNazov">Online Priatelia</h4>
                        <ul className="rightbarFriendList">
                        <ChatOnlineRightbar
                          onlineUsers={onlineUsers}
                          currentId={currentUser._id}
                          setCurrentChat={setCurrentChat}
                        />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
  }

  const ProfilRightBar = () => {
    return (
      <>
      {user.meno !== currentUser.meno && (
        <Button className="rightbarFollowButton" variant="contained" onClick={handleClick}>
          {followed ? "Zrušiť sledovanie" : "Sledovať"}
          {followed ? <Remove /> : <Add />}
          </Button>
      )}
      <h4 className="rightbarNazov">Informácie o používateľovi</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Krajina: </span>
          <span className="rightbarInfoValue">Slovensko</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Mesto: </span>
          <span className="rightbarInfoValue">Humenné</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Škola: </span>
          <span className="rightbarInfoValue">Stredná odborná škola polytechnická, Humenné</span>
        </div>
      </div>
      <h4 className="rightbarNazov">Sledovatelia používateľa</h4>
      <div className="rightbarFollowings">
        {friends.map(friend=>(
        <Link to={"/profil/" + friend.meno} style={{textDecoration: "none", color:"black"}}>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={friend.profilovka ? AVATAR+friend.profilovka : PF+"noAvatar.png"} alt="" />
            <span className="rightbarFollowingName">{friend.meno}</span>
          </div>
        </Link>
        ))}
      </div>
      </>
    );
  }
  
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
            {user ? <ProfilRightBar /> : <DomovRightBar />}
        </div>
    </div>
  );
}
