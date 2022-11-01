import axios from "axios";
import React, { useEffect, useState } from "react";
import './Konverzacia.css';

const Konverzacia = ({conversation, currentUser}) => {
    const AVATAR = process.env.REACT_APP_AVATAR_FOLDER;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState(null);

    useEffect(() => {
        const friendId = conversation.members.find(m=>m !== currentUser._id);

        const getUser = async () => {
            try {
              const res = await axios("/pouzivatelia?userId=" + friendId);
              setUser(res.data);
            } catch (err) {
              console.log(err);
            }
          };
          getUser();
        }, [currentUser, conversation]);

    return (
        <div className="konverzacia">
            <img className="konverzaciaImg" src={user?.profilovka ? AVATAR+user.profilovka : PF+"noAvatar.png"} alt="" />
            <p className="konverzaciaMeno">{user?.meno}</p>
        </div>
    );
}
 
export default Konverzacia;