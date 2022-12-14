import React, { useContext } from "react";
import './Topbar.css';
import { Search} from "@mui/icons-material";
import TopbarDetaily from "../Topbar/TopbarDetaily/TopbarDetaily";

const Topbar = () => {

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarText">
                    <p><a href="/" style={{textDecoration: 'none', color: 'white'}}>PolyPeer</a></p>
                </div>

                <div className="topbarStred">
                    <div className="topbarSearch">
                        <Search className="searchIcon"/>
                        <input placeholder="Hľadajte priateľov, príspevky alebo obrázky" className='searchInput' />
                    </div>
                </div>

                <div className="topbarVpravo">
                    <TopbarDetaily />
                </div>
            </div>
        </div>
    );
}
 
export default Topbar