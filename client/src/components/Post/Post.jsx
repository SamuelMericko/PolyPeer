import React from 'react';
import axios from 'axios';
import { MoreVert } from '@mui/icons-material';
import './Post.css';
import { useState, useEffect } from 'react';

export default function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [pouzivatel, setPouzivatel] = useState({});

    useEffect(() => {
        const fetchPouzivatel = async () => {
            const res = await axios.get(`pouzivatelia/${post.userId}`);
            setPouzivatel(res.data);
        };
        fetchPouzivatel();
    },[])

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    return (
      <div className="post">
        <div className="postWrapper">
            <div className="postHore">
                <div className="postHoreVlavo">
                    <img className="postProfileImage" src={pouzivatel.profilovka} alt="" />
                    <span className="postMeno">{pouzivatel.meno}</span>
                    <span className="postCas">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postStred">
                <span className="postText">{post?.popis}</span>
                <img className="postImg" src={PF + post.photo} alt="" />
            </div>
            <div className="postDole">
                <div className="postDoleVlavo">
                <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                <span className="postLikeCounter">{like} ľudom sa to páči</span>
                </div>
                <div className="postDoleVpravo">
                    <span className="postKomentarText">{post.comment} komentárov</span>
                </div>
            </div>
        </div>
      </div>
    )
  }