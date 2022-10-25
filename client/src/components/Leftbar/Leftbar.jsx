import React from "react";
import './Leftbar.css';
import BlizkyPriatel from "../BlizkyPriatel/BlizkyPriatel";
import { Users } from "../../dummyData";
import LeftbarMenu from "./LeftbarMenu/LeftbarMenu";
import { Group } from '@mui/icons-material';

const Leftbar = () => {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <div className="menu">
                   < LeftbarMenu/>
                </div>

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