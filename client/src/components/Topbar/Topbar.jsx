import React from "react";
import './Topbar.css';
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarText">
                    <p>PolyPeer</p>
                </div>

                <div className="topbarStred">
                    <div className="topbarSearch">
                        <Search className="searchIcon"/>
                        <input placeholder="Hľadajte prijateľov, príspevky alebo obrázky" className='searchInput' />
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Topbar