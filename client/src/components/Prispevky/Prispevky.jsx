import React from "react";
import './Prispevky.css';
import Post from '../Post/Post';
import Share from '../Share/Share';
import { useState, useEffect } from "react";
import axios from 'axios';


const Prispevky = ({username}) => {
    const [prispevky, setPrispevky] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username 
            ? await axios.get('/posts/profile/' + username) 
            : await axios.get('/posts/timeline/635aa64302dfc3728313516b');
            setPrispevky(res.data);
        };
        fetchPosts();
    },[username])

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