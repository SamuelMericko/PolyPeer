import React from 'react';
import { MoreVert } from '@mui/icons-material';
import './Post.css';
import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    return (
      <div className="post">
        <div className="postWrapper">
            <div className="postHore">
                <div className="postHoreVlavo">
                    <img className="postProfileImage" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postMeno">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                    <span className="postCas">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postStred">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postDole">
                <div className="postDoleVlavo">
                <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
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