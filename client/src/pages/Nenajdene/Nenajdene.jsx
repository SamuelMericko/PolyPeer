import React from "react";
import './Nenajdene.css';

const Nenajdene = () => {
    return (
        <div className="nenajdene">
            <div className="nenajdeneWrapper">
                <img src="/images/notFound.svg" alt="Stranka_sa_nenasla" className="nenajdeneImg"/>
                
                <h1 className="nenajdeneNazov"> Je nám to ľúto...</h1>
                <h2 className="nenajdeneText">Stránka, ktorú hľadáte sa nenašla.</h2>
                </div>
        </div>  
    );
}
 
export default Nenajdene;