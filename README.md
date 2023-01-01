![Snímka_obrazovky_zo_dňa_2022-09-30_08-17-43-removebg-preview](https://user-images.githubusercontent.com/112657175/193205177-96602337-a3a9-41da-ae31-1eaf2e87ec17.png)
![GitHub last commit](https://img.shields.io/github/last-commit/SamuelMericko/PolyPeer?label=Last%20commit)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SamuelMericko/PolyPeer?label=Ve%C4%BEkos%C5%A5%20k%C3%B3du&logo=JavaScript&style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/SamuelMericko/Polypeer?logo=javascript&style=flat-square)
![GitHub repo file count](https://img.shields.io/github/directory-file-count/SamuelMericko/PolyPeer?style=flat-square)
![GitHub branch checks state](https://img.shields.io/github/checks-status/SamuelMericko/PolyPeer/main?style=flat-square)
# Sociálna sieť vo forme webovej aplikácie
## Špecifikácie:
### Aplikácia by mala obsahovať:

 - Funkčný registračný/prihlasovací formulár
 - Dynamické profilové stránky
 - Globálnu nástenku, kam môžu publikovať všetci žiaci a zamestnanci
 - Funkčný chat
 - Pridávanie a odoberanie priateľov
 - Možnosť zmeny profilovej fotografie
 - Smerovanie na hlavnú stránku školy a EduPage

### Použité technológie:

 - **HTML** – hlavná štruktúra aplikácie
 - **CSS** – vytvorenie estetickej stránky aplikácie.
 - **JavaScript** – hlavný programovací jazyk stránky.
 - **MongoDB** – nerelačná databáza, kam sa budú ukladať používateľské účty, heslá (šifrované), ich príslušnosť k danej skupine
   (žiak/zamestnanec), dodatočné informácie o sebe (meno, priezvisko,
   trieda, škola) a informácie o jednotlivých publikáciách (názov, text,
   možnosť vkladania obrázkov).
 - **Node.js** – nadstavba JavaScriptu - vytvorenie webového servera pomocou programovacieho jazyka JavaScript. Node.js bude získavať a
   odosielať dynamické stránky na základe požiadaviek (hlavná stránka,
   registračný formulár atď ...). Je to programový základ
   registračného/prihlasovacieho formulára. Bude spolupracovať s MongoDB
   na získavaní a upravovaní dát v databáze. Node.js bude využitý ako
   „backend“ aplikácie.
 - **Express.js** – nadstavba Node.js, ktorá uľahčuje prácu so smerovaním používateľských požiadaviek pre stránky, chat a podobne.
 - **React** – technológia, ktorá v spojení s HTML, CSS a JavaScriptom bude tvoriť hlavnú estetickú časť aplikácie – dizajn hlavičky,
   navigácie, prihlasovacieho formulára a podobne.
 - **Figma** - Desktopová/Webová aplikácia, ktorú použijem na vytvorenie konceptu dizajnu stránok.
 - **Adobe Illustrator** – Desktopová aplikácia, ktorú použijem na návrh loga a ilustrácií stránky.
 - **GitHub** - systém správy verzií, kam budem ukladať a zálohovať svoj kód a dizajn stránok.
 - **Visual Studio Code** – môj hlavný desktopový editor kódu, pomocou ktorého naprogramujem aplikáciu.
 - **Socket.io** - knižnica využívana na vytvorenie chatovej aplikácie v reálnom čase.
 - **Material UI** - implementácia rýchleho dizajnu kompnentov aplikácie.
 
## Postup inštalácie projektu:
1. Stiahnuť súbory z GitHubu.
2. Stiahnúť a nainštalovať si VSCode - https://code.visualstudio.com/
3. Stiahnuť a nainštalovať najnovšiu verziu node.js (Current) - https://nodejs.org/en/
4. Po úspešnom nainštalovaní programov rozbalíme stianutý .zip priečinok s kódom
5. Pravým kliknutím myši na novovytvorený súbor zvolíme možnosť "Open with VSCode / Otvoriť v programe VSCode"
6. V editori si otvoríme 3 nové terminály, ktoré sa nachádzaju v hornom paneli apliácie.
7. Do prvého terminálu napíšeme nasledujúce príkazy:

   _cd server_

   _npm install_

   _npm start_

8. Do druhého terminálu napíšeme:

   _cd socket_

   _npm install_

   _npm start_

9. Do posledného terminálu napíšeme:

   _cd client_

   _npm install_

   _npm start_
