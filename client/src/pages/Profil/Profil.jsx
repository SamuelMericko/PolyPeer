import React from 'react';
import './Profil.css';

import Topbar from '../../components/Topbar/Topbar';
import Leftbar from '../../components/Leftbar/Leftbar';
import Prispevky from '../../components/Prispevky/Prispevky';
import RightbarProfil from '../../components/Rightbar/RightbarProfil/RightbarProfil';

export default function Profil() {
  return (
    <>
      <Topbar />
      <div className="profil">
        <Leftbar /> 
        <div className="profilVpravo">
            <div className="profilVpravoHore">
                <div className="profilCover">
                    <img className="profilCoverImg" src="assets/post/3.jpeg" alt="" />
                    <img className="profilUserImg" src="assets/person/7.jpeg" alt="" />
                </div>
                <div className="profilInfo">
                    <h4 className="profilInfoMeno">Meno</h4>
                    <span className="profilInfoPopis">Popis</span>
                </div>
            </div>
            <div className="profilVpravoDole">
                <Prispevky />
                <RightbarProfil/>
            </div>
        </div>
      </div>
    </>
  )
}
