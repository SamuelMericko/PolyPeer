import * as React from 'react';
import './TopbarDetaily';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import { Settings, Chat } from '@mui/icons-material';
import { AuthContext } from '../../../context/AuthContext';
import { Button } from '@mui/material';
import axios from 'axios';

const TopbarDetaily = () => {

    const {user} = useContext(AuthContext); 
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const AVATAR = process.env.REACT_APP_AVATAR_FOLDER;
    const [pouzivatel, setPouzivatel] = useState({});

    useEffect(() => {
        const fetchPouzivatel = async () => {
            const res = await axios.get("/pouzivatelia/profilovka/"+user._id);
            setPouzivatel(res.data);
        };
        fetchPouzivatel();
    },[])

    const logout = async () => {
        try{
            localStorage.clear();
            window.location.reload();
        } catch(err) {
            console.log(err);
        } 
    }

    return ( 
        <>
        <Button variant='contained' size="small" color="secondary" href="/" onClick={logout} sx={{width: 150, height: 30, marginTop: 2, marginRight: 1}}> Odhlásiť sa</Button>
        <Box sx={{ '& > :not(style)': { m: 1 } }} 
        display="flex"
        justifyContent="end"
        alignItems="center"
        className="rightbarDetailyBox"
        height="55px"
        marginRight={5}
        >
            <Link to={`/chat`}>
                <Fab color="primary" aria-label="add" size="medium">
                    <Chat />
                </Fab>
            </Link>
            <Fab color="grey" aria-label="edit" size="medium">
                <Settings />
            </Fab>
            <Link to={`/profil/${user.meno}`}>
                <Fab size="medium" href="/profil">
                    <Avatar alt="Safak" src={pouzivatel.profilovka ? AVATAR+pouzivatel.profilovka : PF+'noAvatar.png'} className="rightbarProfilePicture"/>
                </Fab> 
            </Link>
        </Box>
        </>
     );
}
 
export default TopbarDetaily;