import React from "react";
import './Leftbar.css';
import BlizkyPriatel from "../BlizkyPriatel/BlizkyPriatel";
import { Users } from "../../dummyData";
import LeftbarMenu from "./LeftbarMenu/LeftbarMenu";
import { Group } from '@mui/icons-material';
import { useEffect, useState } from "react";
import axios from "axios";

const Leftbar = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('http://localhost:3000/pouzivatelia/allusers');
            setUsers(res.data)
        }
        fetchUsers();
    },[1]);

    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <div className="menu">
                   < LeftbarMenu/>
                </div>

                <hr className="break"/>

                <div className="blizkiPriateliaWrapper">
                    <Group className="blizkiPriateliaIcon"/>
                    <h2 className="blizkiPriateliaNazov">Všetci používatelia</h2>
                </div>
                
                <ul className="blizkiPriatelia">
                {users.map((u) => (
                    <BlizkyPriatel key={u._id} user={u}/>
                ))}
                </ul>
            </div>
        </div>
    );
}
 
export default Leftbar;