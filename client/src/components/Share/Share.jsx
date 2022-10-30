import React, { useContext, useRef, useState } from 'react';
import './Share.css';
import {PermMedia, Label, Room, EmojiEmotions, WindowSharp} from '@mui/icons-material';
import {AuthContext} from '../../context/AuthContext';
import { Button } from '@mui/material';
import { Cancel } from '@mui/icons-material';
import axios from 'axios';
import { useEffect } from 'react';

const Share = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const AVATAR = process.env.REACT_APP_AVATAR_FOLDER;
    const [pouzivatel, setPouzivatel] = useState({});
    const {user} = useContext(AuthContext);
    const popis = useRef()
    const [file, setFile] = useState(null)

    useEffect(() => {
      const fetchPouzivatel = async () => {
          const res = await axios.get("/pouzivatelia/profilovka/"+user._id);
          setPouzivatel(res.data);
      };
      fetchPouzivatel();
  },[])

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
          userId: user._id,
          popis: popis.current.value,
        };
        if (file) {
          const data = new FormData();
          const fileName = Date.now() + file.name;
          data.append("name", fileName);
          data.append("file", file);
          newPost.img = fileName;
          console.log(newPost);
          try {
            await axios.post("/upload/posts", data);
          } catch (err) {}
        }
        try {
          await axios.post("/posts", newPost);
          window.location.reload();
        } catch (err) {}
      };

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={pouzivatel.profilovka ? AVATAR+pouzivatel.profilovka : PF+"noAvatar.png"} alt="" />
                    <input placeholder="Napíšte nám niečo!" className="shareInput" ref={popis}/>
                </div>
                <hr className="shareHr"/>
                {file && (
                  <div className="shareImgContainer">
                    <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                    <Cancel className="shareCancelImg" onClick={() => setFile(null)}/>
                  </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareDetaily">
                        <label htmlFor="file" className="shareDetail">
                            <PermMedia color="primary" className="shareIcon"/>
                            <span className="shareDetailText">Nahrať obrázok</span>
                            <input type="file" id="file" accept='.png, .jpeg, .jpg' onChange={(e) =>setFile(e.target.files[0])}/>
                        </label>
                    </div>
                    <Button className="shareButton" color="secondary" variant="contained"size="small" type="submit">Odoslať</Button>
                </form>
            </div>
        </div>
    )
}
 
export default Share;