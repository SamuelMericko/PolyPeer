import React from "react";
import './RightbarDomov.css';
import { Users } from '../../../dummyData';
import Online from '../../Online/Online';

const RightbarDomov = () => {
    return (
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
 
export default RightbarDomov;