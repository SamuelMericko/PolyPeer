import React from "react";
import './Prispevky.css';
import Post from '../Post/Post';
import Share from '../Share/Share';
import { useState, useEffect } from "react";
import axios from 'axios';


const Prispevky = () => {
    const [prispevky, setPrispevky] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('posts/timeline/635974e82b08a54e87a116b0');
            setPrispevky(res.data);
        };
        fetchPosts();
    },[])

    return (
        <div className="prispevky">
            <div className="prispevkyWrapper">
                <Share />
                {prispevky.map((p) => (
                    <Post key={p._id} post={p}/>
                ))}
            </div>
        </div>
    );
}
 
export default Prispevky;