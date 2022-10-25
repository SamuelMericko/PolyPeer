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

export default function LeftbarMenu() {

  return (
    <>
      <div className="menuNazovWrapper">
        <MenuIcon className="menuIcon"/>
        <h2 className="menuNazov">Menu</h2>
      </div>

     <List sx={{ width: '100%', maxWidth: 360 }}>
        <ListItemButton sx={{ pl: 4, color: 'secondary' }} href="/login" >
          <ListItemIcon color='primary'>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Domov" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <Chat />
          </ListItemIcon>
          <ListItemText primary="Správy" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Profil" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }} href="https://soshe.edupage.org/">
          <ListItemIcon>
            <School />
          </ListItemIcon>
          <ListItemText primary="Stránka školy" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }} href="https://portal.edupage.org/">
          <ListItemIcon>
            <CastForEducation />
          </ListItemIcon>
          <ListItemText primary="Edupage" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Nastavenia" />
        </ListItemButton>
      </List>
    </>
  );
}
