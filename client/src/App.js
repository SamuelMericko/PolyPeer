import React from "react";
import Prihlasenie from "./pages/Prihlasenie/Prihlasenie";
import HashLoader from 'react-spinners/HashLoader';
import { useEffect, useState } from "react";
import './App.css';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
      }, 2000);
  }, []);

  return (
    <div className="App">
    {loading ? (
      <>
      <img src="/images/logo.svg" alt="Polypeer_logo" className="logo" width="40%"/>
      <HashLoader color="#00B0E6" size={100} className="loader" />
      </>
    ) : (
      <Prihlasenie />
    )}
    </div>
  );
}

export default App;
