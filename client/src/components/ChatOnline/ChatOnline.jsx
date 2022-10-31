import { Avatar, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import React from "react";
import './ChatOnline.css';

const ChatOnline = () => {
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

    return (
        <div className="chatOnline">
            <div className="chatOnlinePriatel">
                <div className="chatOnlineImgContainer">
                    <Stack direction="row" spacing={2} className="chatOnlineImg">
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt="Remy Sharp" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwritestylesonline.com%2Fwp-content%2Fuploads%2F2016%2F08%2FFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg&f=1&nofb=1&ipt=05b95ab2eb10727742e3923f1c0329b34351893e42049949a39823e6d2840032&ipo=images" />
                        </StyledBadge>
                    </Stack>
                    </div>
                    <p className="chatOnlineMeno">John Doe</p>
                </div>
            </div>
    );
}
 
export default ChatOnline;