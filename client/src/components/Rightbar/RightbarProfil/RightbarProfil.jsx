import React from "react";
import './RightbarProfil.css';

const RightbarProfil = () => {
    return (
        <>
            <div className="rightbar">
                <div className="rightbarWrapper">
                    <h4 className="rightbarNazov">Informácie o používateľovi</h4>
                    <div className="rightbarInfo">
                        <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Krajina: </span>
                        <span className="rightbarInfoValue">Slovensko</span>
                        </div>
                        <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Mesto: </span>
                        <span className="rightbarInfoValue">Humenné</span>
                        </div>
                        <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Škola: </span>
                        <span className="rightbarInfoValue">Soshe</span>
                        </div>
                    </div>
                    <h4 className="rightbarNazov">Priatelia používateľa</h4>
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
                </div>
            </div>
        </>
    );
}
 
export default RightbarProfil;