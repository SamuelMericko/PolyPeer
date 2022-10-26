// Knižnice
import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Stránky
import Prihlasenie from "./pages/Prihlasenie/Prihlasenie";
import Registracia from "./pages/Registracia/Registracia";
import Nenajdene from "./pages/Nenajdene/Nenajdene";
import Domov from "./pages/Domov/Domov";
import Profil from "./pages/Profil/Profil";

//Vytvorenie témy stránky
import { createTheme, ThemeProvider } from '@mui/material';
import { green } from "@mui/material/colors";
import Nacitavanie from "./components/Nacitavanie/Nacitavanie";

const tema = createTheme({
    palette: {
      primary: {
        main: '#0087B9',
        contrastText: '#fff'
      },
      secondary: {
        main: green[600],
        contrastText: '#fff'
      },
    },
  });

  function App() {
    const [loading, setLoading] = useState(false);
    
        useEffect(() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }, []);

    return (
      <ThemeProvider theme={tema}>
        <div className="App">
          {loading? (
            <Nacitavanie />
          ) : (
            <Routes>
              <Route path="/" element={<Domov />}/>
              <Route path="/login" element={<Prihlasenie />}/>
              <Route path="/registracia" element={<Registracia />}/>
              <Route path="/profil/:meno" element={<Profil />}/>
              <Route path="*" element={<Nenajdene />} />
            </Routes>
          )}
        </div>
      </ThemeProvider>
  );
}

export default App;