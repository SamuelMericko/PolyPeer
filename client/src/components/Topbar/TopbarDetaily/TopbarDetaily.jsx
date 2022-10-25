import * as React from 'react';
import './TopbarDetaily';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Avatar } from '@mui/material';
import { Settings, Chat } from '@mui/icons-material';

const TopbarDetaily = () => {
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
            <Fab size="medium" >
                <Avatar alt="Safak" src="/assets/person/1.jpeg" className="rightbarProfilePicture"/>
            </Fab> 
        </Box>
     );
}
 
export default TopbarDetaily;