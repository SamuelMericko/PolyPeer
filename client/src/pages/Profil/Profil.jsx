import React from 'react';
import './Profil.css';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Topbar from '../../components/Topbar/Topbar';
import Leftbar from '../../components/Leftbar/Leftbar';
import Prispevky from '../../components/Prispevky/Prispevky';
import Rightbar from '../../components/Rightbar/Rightbar';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext';


export default function Profil() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const AVATAR = process.env.REACT_APP_AVATAR_FOLDER;
  const {user} = useContext(AuthContext);
  const [avatar, setAvatar] = useState(null)
  const [pouzivatel, setPouzivatel] = useState({});
  const username = useParams().meno;

  useEffect(() => {
      const fetchPouzivatel = async () => {
          const res = await axios.get(`/pouzivatelia?username=${username}`);
          setPouzivatel(res.data);
      };
      fetchPouzivatel();
  },[username])

  const putAvatar = async (e) => {
    if (avatar) {
      const data = new FormData();
      const avatarName = Date.now() + avatar.name;
      data.append("name", avatarName);
      data.append("file", avatar);
      user.profilovka = avatarName;
      console.log(user.profilovka);
      try {
        await axios.put("/upload/avatars", data);
        await axios.put("/pouzivatelia/"+user._id, {profilovka: user.profilovka})
        await window.location.reload();
      } catch (err) {}
    }
  };

  return (
    <>
      <Topbar />
      <div className="profil">
        <Leftbar /> 
        <div className="profilVpravo">
            <div className="profilVpravoHore">
                <div className="profilCover">
                  <div className="div">
                    <img className="profilCoverImg" src={pouzivatel.coverPicture ? PF+pouzivatel.coverPicture : PF+"noCover.png"} alt="" />
                    </div>
                    <div className="profilAvatar">
                      <img className="profilUserImg" src={pouzivatel.profilovka ? AVATAR+pouzivatel.profilovka : PF+"noAvatar.png"} alt="" />
                      { pouzivatel.meno === user.meno && <>
                      <div className="avatarUpload">
                        <input accept='.png, .jpeg, .jpg' id="icon-button-file"
                          type="file" style={{ display: 'none' }} on onChange={(e) => {
                            setAvatar(e.target.files[0])
                            putAvatar()
                            }}/>
                        <label htmlFor="icon-button-file">
                          <IconButton color="primary" component="span" sx={{alignContent: "center"}}>
                            <Edit />
                          </IconButton>
                        </label>
                      </div></>}
                    </div>
                </div>
                <div className="profilInfo">
                    <h4 className="profilInfoMeno">{pouzivatel.meno}</h4>
                    <span className="profilInfoPopis">{pouzivatel.popis}</span>
                </div>
            </div>
            <div className="profilVpravoDole">
                <Prispevky username={username}/>
                <Rightbar user={pouzivatel}/>
            </div>
        </div>
      </div>
    </>
  )
}
