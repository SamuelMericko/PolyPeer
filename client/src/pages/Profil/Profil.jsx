import React from 'react';
import './Profil.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Topbar from '../../components/Topbar/Topbar';
import Leftbar from '../../components/Leftbar/Leftbar';
import Prispevky from '../../components/Prispevky/Prispevky';
import Rightbar from '../../components/Rightbar/Rightbar';

export default function Profil() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [pouzivatel, setPouzivatel] = useState({});
  const username = useParams().meno;

  useEffect(() => {
      const fetchPouzivatel = async () => {
          const res = await axios.get(`/pouzivatelia?username=${username}`);
          setPouzivatel(res.data);
          console.log(username);
      };
      fetchPouzivatel();
  },[username])

  return (
    <>
      <Topbar />
      <div className="profil">
        <Leftbar /> 
        <div className="profilVpravo">
            <div className="profilVpravoHore">
                <div className="profilCover">
                    <img className="profilCoverImg" src={pouzivatel.coverPicture ? PF+pouzivatel.coverPicture : PF+"noCover.png"} alt="" />
                    <img className="profilUserImg" src={pouzivatel.profilovka ? PF+pouzivatel.profilovka : PF+"noAvatar.png"} alt="" />
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
