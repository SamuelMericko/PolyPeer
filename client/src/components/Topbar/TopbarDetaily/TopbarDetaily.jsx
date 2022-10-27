import * as React from 'react';
import './TopbarDetaily';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useContext } from 'react';
import { Settings, Chat } from '@mui/icons-material';
import { AuthContext } from '../../../context/AuthContext';

const TopbarDetaily = () => {

    const {user} = useContext(AuthContext); 
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return ( 
        <Box sx={{ '& > :not(style)': { m: 1 } }} 
        display="flex"
        justifyContent="end"
        alignItems="center"
        className="rightbarDetailyBox"
        height="55px"
        marginRight={5}
        >
            <Fab color="primary" aria-label="add" size="medium">
                <Chat />
            </Fab>
            <Fab color="grey" aria-label="edit" size="medium">
                <Settings />
            </Fab>
            <Link to={`/profil/${user.meno}`}>
                <Fab size="medium" href="/profil">
                    <Avatar alt="Safak" src={user.profilovka ? PF+user.profilovka : PF+'noAvatar.png'} className="rightbarProfilePicture"/>
                </Fab> 
            </Link>
        </Box>
     );
}
 
export default TopbarDetaily;