import { Avatar, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import React, { useEffect, useState } from "react";
import './ChatOnline.css';
import axios from "axios";

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));

      const [friends, setFriends] = useState([]);
      const [onlineFriends, setOnlineFriends] = useState([]);
      const PF = process.env.REACT_APP_PUBLIC_FOLDER;
      const AVATAR = process.env.REACT_APP_AVATAR_FOLDER;

      useEffect(() => {
        const getFriends = async () => {
          const res = await axios.get("/pouzivatelia/friends/" + currentId);
          setFriends(res.data);
        };
        getFriends();
      }, [currentId]);
    
      useEffect(() => {
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
      }, [friends, onlineUsers]);

      const handleClick = async (user) => {
        try {
          const res = await axios.get(`/conversations/find/${currentId}/${user._id}`);
          if(res.data == null) {
            const response = await axios.post("/conversations/", {text: "start", senderId: currentId, recieverId: user._id });
            setCurrentChat(response.data);
          } else {
            setCurrentChat(res.data);
          }
        } catch(err) {
          console.log(err);
        }
      }

    return (
        <div className="chatOnline">
          {onlineFriends.map((o) => (
            <div className="chatOnlinePriatel" onClick={()=>{handleClick(o)}}>
                <div className="chatOnlineImgContainer">
                    <Stack direction="row" spacing={2} className="chatOnlineImg">
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt="profilovka" src={o?.profilovka ? AVATAR+o.profilovka : PF+"noAvatar.png"} />
                        </StyledBadge>
                    </Stack>
                    </div>
                    <p className="chatOnlineMeno">{o?.meno}</p>
                </div>
              ))}
            </div>
    );
}
 
export default ChatOnline;