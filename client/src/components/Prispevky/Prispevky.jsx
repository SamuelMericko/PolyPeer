import React from "react";
import './Prispevky.css';
import Post from '../Post/Post';
import Share from '../Share/Share';
import { Posts } from '../../dummyData';

const Prispevky = () => {
    return (
        <div className="prispevky">
            <div className="prispevkyWrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p}/>
                ))}
            </div>
        </div>
    );
}
 
export default Prispevky;