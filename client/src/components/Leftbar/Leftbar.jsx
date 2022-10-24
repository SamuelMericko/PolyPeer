import React from "react";
import './Leftbar.css';
import BlizkyPriatel from "../BlizkyPriatel/BlizkyPriatel";
import { Users } from "../../dummyData";

//ikony
import { Home, Message, AccountCircle, School, CastForEducation, Settings, Menu, Group } from '@mui/icons-material';

const Leftbar = () => {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <img src="/images/logo.svg" alt="Polypeer_logo" className="logoDomov" />
                <hr className="break"/>
                <ul className="menu">
                    <div className="menuNazovWrapper">
                        <Menu className="menuIcon"/>
                        <h2 className="menuNazov">Menu</h2>
                    </div>
                    <div className="menuItem">
                        <li>
                            <Home className="menuItemIcon"/>
                            <span className="menuItemText"><a className="menuItemTextLink" href="#">Domov</a></span>
                        </li>
                    </div>
                    <div className="menuItem">
                        <li>
                            <Message className="menuItemIcon"/>
                            <span className="menuItemText"><a className="menuItemTextLink" href="#">Správy</a></span>
                        </li>
                    </div>
                    <div className="menuItem">
                        <li>
                            <AccountCircle className="menuItemIcon" />
                            <span className="menuItemText"><a className="menuItemTextLink" href="#">Profil</a></span>
                        </li>
                    </div>
                    <div className="menuItem">
                        <li>
                            <School className="menuItemIcon"/>
                            <span className="menuItemText"><a className="menuItemTextLink" href="#">Stránka školy</a></span>
                        </li>
                    </div>
                    <div className="menuItem">
                        <li>
                            <CastForEducation className="menuItemIcon"/>
                            <span className="menuItemText"><a className="menuItemTextLink" href="#">Edupage</a></span>
                        </li>
                    </div>
                    <div className="menuItem">
                        <li>
                            <Settings className="menuItemIcon"/>
                            <span className="menuItemText"><a className="menuItemTextLink" href="#">Nastavenia</a></span>
                        </li>
                    </div>
                </ul>

                <hr className="break"/>

                <div className="blizkiPriateliaWrapper">
                    <Group className="blizkiPriateliaIcon"/>
                    <h2 className="blizkiPriateliaNazov">Blízki priatelia</h2>
                </div>
                
                <ul className="blizkiPriatelia">
                {Users.map((u)=> (
                    <BlizkyPriatel key={u.id} user={u}/>
                ))}
                </ul>
            </div>
        </div>
    );
}
 
export default Leftbar;