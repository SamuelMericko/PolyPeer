import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { School } from '@mui/icons-material';
import { CastForEducation } from '@mui/icons-material';
import { QuestionMark } from '@mui/icons-material';
import Github from '@mui/icons-material/GitHub';


const FooterButton = () => {
    const actions = [
        { icon: <School/>, name: 'Stránka Školy', link: "https://soshe.edupage.org/" },
        { icon: <CastForEducation />, name: 'Edupage', link: "https://portal.edupage.org/"  },
        { icon: <Github />, name: 'Github repozitár', link: "https://github.com/SamuelMericko/PolyPeer"  },
        { icon: <QuestionMark />, name: 'Viac informác', link: "/404"  },
      ];
      
    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                <SpeedDialAction href={action.link}
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
                ))}
            </SpeedDial>
        </Box>
    );
}
 
export default FooterButton;
