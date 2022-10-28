import React, { useEffect, useState } from 'react';
import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/Online';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Rightbar({ user }) {
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const [friends, setFriends] = useState([]);

useEffect(() => {
  const getFriends = async () => {
    try {
      const friendList = await axios.get("/pouzivatelia/friends/" + user._id)
      setFriends(friendList.data);
    } catch(err) {
      console.log(err);
    }
  };
  getFriends();
}, [user]);

  const DomovRightBar = () => {
    return(
        <>  
            <div className="rightbarWrapper">
                <div className="rightbar">
                    <div className="homeRightbarWrapper">
                        <div className="ilustraciaWrapper">
                            <img src="/images/rightbarIlustracia.jpg" alt="kavaIlustracia" className='rightbarIlustracia'/>
                        </div>  
                        <hr className="rightbarBreak"/>
                        <h4 className="rightbarNazov">Online Priatelia</h4>
                        <ul className="rightbarFriendList">
                            {Users.map(u =>(
                                <Online key={u.id} user={u}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
  }

  const ProfilRightBar = () => {
    return (
      <>
      <h4 className="rightbarNazov">Informácie o používateľovi</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Krajina: </span>
          <span className="rightbarInfoValue">{user.krajina}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Mesto: </span>
          <span className="rightbarInfoValue">{user.mesto}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Škola: </span>
          <span className="rightbarInfoValue">{user.skola}</span>
        </div>
      </div>
      <h4 className="rightbarNazov">Sledovatelia používateľa</h4>
      <div className="rightbarFollowings">
        {friends.map(friend=>(
        <Link to={"/profil/" + friend.meno}>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={friend.profilovka ? PF+friend.profilovka : PF+"noAvatar.png"} alt="" />
            <span className="rightbarFollowingName">{friend.meno}</span>
          </div>
        </Link>
        ))}
      </div>
      </>
    );
  }
  
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
            {user ? <ProfilRightBar /> : <DomovRightBar />}
        </div>
    </div>
  );
}
