import React from 'react';
import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/Online';

export default function Rightbar({profile}) {
  const HomeRightBar = () => {
    return(
      <> 
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
      </>
    );
  }

  const ProfileRightBar = () => {
    return (
      <>
      <h4 className="rightbarNazov">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City: </span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship: </span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/person/1.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/person/2.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/person/3.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/person/4.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/person/5.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/person/6.jpeg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
      </>
    );
  }
  
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
         <HomeRightBar />
        </div>
    </div>
  );
}
