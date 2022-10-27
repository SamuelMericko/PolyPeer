import React, { useContext } from "react";
import './Prispevky.css';
import Post from '../Post/Post';
import Share from '../Share/Share';
import { useState, useEffect } from "react";
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";


const Prispevky = ({username}) => {
    const [prispevky, setPrispevky] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
            ? await axios.get('/posts/profile/' + username) 
            : await axios.get('/posts/timeline/' + user._id);
            setPrispevky(res.data);
            console.log(username);
            console.log(user._id);
        };
        fetchPosts();
    },[username, user._id])

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