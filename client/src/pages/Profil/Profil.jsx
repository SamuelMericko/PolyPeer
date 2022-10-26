import React from 'react';
import './Profil.css';

import Topbar from '../../components/Topbar/Topbar';
import Leftbar from '../../components/Leftbar/Leftbar';
import Prispevky from '../../components/Prispevky/Prispevky';
import RightbarProfil from '../../components/Rightbar/RightbarProfil/RightbarProfil';

export default function Profil() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
                    <h4 className="profilInfoMeno">Meno</h4>
                    <span className="profilInfoPopis">Popis</span>
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
