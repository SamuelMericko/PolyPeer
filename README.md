![Snímka_obrazovky_zo_dňa_2022-09-30_08-17-43-removebg-preview](https://user-images.githubusercontent.com/112657175/193205177-96602337-a3a9-41da-ae31-1eaf2e87ec17.png)
![GitHub last commit](https://img.shields.io/github/last-commit/SamuelMericko/PolyPeer?label=Last%20commit)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SamuelMericko/PolyPeer?label=Ve%C4%BEkos%C5%A5%20k%C3%B3du&logo=JavaScript&style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/SamuelMericko/Polypeer?logo=javascript&style=flat-square)
![GitHub branch checks state](https://img.shields.io/github/checks-status/SamuelMericko/PolyPeer/main?style=flat-square)
# Sociálna sieť vo forme webovej aplikácie
## Špecifikácie:
### Aplikácia by mala obsahovať:

 - Funkčný registračný/prihlasovací formulár
 - Dynamické profilové stránky
 - Globálnu nástenku, kam môžu publikovať všetci žiaci a zamestnanci
 - Nástenky pre jednotlivé triedy, kam môžu publikovať len žiaci a
   triedny učitelia daných tried
 - Nástenku pre zamestnancov školy 
 - Funkčný chat
 - Pridávanie a odoberanie priateľov
 - Smerovanie na hlavnú stránku školy a EduPage
 - Zmena svetlej/tmavej témy

### Použité technológie:

 - **HTML** – hlavná štruktúra aplikácie
 - **CSS** – vytvorenie estetickej stránky aplikácie
 - **JavaScript** – hlavný programovací jazyk stránky
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
 - **Figma** - Desktopová/Webová aplikácia, ktorú použijem na vytvorenie konceptu dizajnu stránok
 - **Adobe Illustrator** – Desktopová aplikácia, ktorú použijem na návrh loga a ilustrácií stránky.
 - **GitHub** - systém správy verzií, kam budem ukladať a zálohovať svoj kód a dizajn stránok.
 - **Visual Studio Code** – môj hlavný desktopový editor kódu, pomocou ktorého naprogramujem aplikáciu
