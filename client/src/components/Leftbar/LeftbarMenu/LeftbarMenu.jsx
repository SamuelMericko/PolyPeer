import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Chat from '@mui/icons-material/Chat';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import School from '@mui/icons-material/School';
import CastForEducation from '@mui/icons-material/CastForEducation';
import Settings from '@mui/icons-material/Settings';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function LeftbarMenu() {
  const {user} = useContext(AuthContext);

  return (
    <>
      <div className="menuNazovWrapper">
        <MenuIcon className="menuIcon"/>
        <h2 className="menuNazov">Menu</h2>
      </div>

     <List sx={{ width: '100%', maxWidth: 360 }}>
        <ListItemButton sx={{ pl: 4}} href="/" >
          <ListItemIcon>
            <Home color="primary"/>
          </ListItemIcon>
          <ListItemText primary="Domov" />
        </ListItemButton>
        <Link to={`/chat`} className="leftbarLink">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Chat color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Správy" />
          </ListItemButton>
        </Link>
        <Link to={`/profil/${user.meno}`} className="leftbarLink">
          <ListItemButton sx={{ pl: 4 }}> 
              <ListItemIcon>
                <Person color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Profil" />
          </ListItemButton>
        </Link>
        <ListItemButton sx={{ pl: 4 }} href="https://soshe.edupage.org/">
          <ListItemIcon>
            <School color="primary"/>
          </ListItemIcon>
          <ListItemText primary="Stránka školy" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }} href="https://portal.edupage.org/">
          <ListItemIcon>
            <CastForEducation color="primary"/>
          </ListItemIcon>
          <ListItemText primary="Edupage" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <Settings color="primary"/>
          </ListItemIcon>
          <ListItemText primary="Nastavenia" />
        </ListItemButton>
      </List>
    </>
  );
}
