import React, { useContext } from 'react';
import axios from 'axios';
import { ThumbUp } from '@mui/icons-material';
import './Post.css';
import { useState, useEffect } from 'react';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const AVATAR = process.env.REACT_APP_AVATAR_FOLDER;
    const POST = process.env.REACT_APP_POST_FOLDER;
    const {user} = useContext(AuthContext);

    const [pouzivatel, setPouzivatel] = useState({});

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    useEffect(() => {
        setIsLiked(post.likes.includes(user._id))
    },[user._id, post.likes]);

    useEffect(() => {
        const fetchPouzivatel = async () => {
            const res = await axios.get(`/pouzivatelia?userId=${post.userId}`);
            setPouzivatel(res.data);
        };
        fetchPouzivatel();
    },[post.userId])

    const likeHandler = () => {
        try{
            axios.put("posts/" + post._id + "/like", {userId:user._id})
        } catch(err) {
            console.log(err)
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    const deletePost = async () => {
        try{
            await axios.delete('/posts/'+ post._id, {data:{userId:user._id}});
            window.location.reload();
        } catch(err) {
            console.log(err);
        } 
    }

    return (
      <div className="post">
        <div className="postWrapper">
            <div className="postHore">
                <div className="postHoreVlavo">
                    <Link to={`profil/${pouzivatel.meno}`}>
                        <img className="postProfileImage" src={pouzivatel.profilovka ? AVATAR+pouzivatel.profilovka : PF+"noAvatar.png"} alt="" />
                    </Link>
                    <span className="postMeno">{pouzivatel.meno}</span>
                    <span className="postCas">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                { pouzivatel.meno === user.meno && <>
                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={deletePost}/>
                    </IconButton>
                </>}
                </div>
            </div>
            <div className="postStred">
                <span className="postText">{post.popis}</span>
                <img className="postImg" src={POST + post.img} alt="" />
            </div>
            <div className="postDole">
                <div className="postDoleVlavo">
                    <IconButton onClick={likeHandler} className="likeIcon" color="primary" sx={{m:1}}>
                        <ThumbUp/>
                    </IconButton>
                    <span className="postLikeCounter">{like} ľudom sa to páči</span>
                </div>
            </div>
        </div>
      </div>
    )
  }