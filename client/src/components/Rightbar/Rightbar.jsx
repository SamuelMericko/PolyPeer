import React from 'react';
import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/Online';

export default function Rightbar({ user }) {
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
      <h4 className="rightbarNazov">Priatelia používateľa</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/1.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/2.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/3.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/4.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/5.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/6.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
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
