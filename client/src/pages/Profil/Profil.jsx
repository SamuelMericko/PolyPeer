import React from 'react';
import './Profil.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Topbar from '../../components/Topbar/Topbar';
import Leftbar from '../../components/Leftbar/Leftbar';
import Prispevky from '../../components/Prispevky/Prispevky';
import RightbarProfil from '../../components/Rightbar/RightbarProfil/RightbarProfil';

export default function Profil() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [pouzivatel, setPouzivatel] = useState({});

  useEffect(() => {
      const fetchPouzivatel = async () => {
          const res = await axios.get(`/pouzivatelia?username=jankoMrkvicka`);
          setPouzivatel(res.data);
      };
      fetchPouzivatel();
  },[])

  return (
    <>
      <Topbar />
      <div className="profil">
        <Leftbar /> 
        <div className="profilVpravo">
            <div className="profilVpravoHore">
                <div className="profilCover">
                    <img className="profilCoverImg" src={`${PF}post/3.jpeg`} alt="" />
                    <img className="profilUserImg" src={`${PF}person/7.jpeg`} alt="" />
                </div>
                <div className="profilInfo">
                    <h4 className="profilInfoMeno">{pouzivatel.meno}</h4>
                    <span className="profilInfoPopis">{pouzivatel.popis}</span>
                </div>
            </div>
            <div className="profilVpravoDole">
                <Prispevky username="jozkoHrasko"/>
                <RightbarProfil/>
            </div>
        </div>
      </div>
    </>
  )
}
