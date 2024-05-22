# SportSee

## Développez un tableau de bord d'analytics avec React

![Visuel du site](src/assets/images/screenshot.png)

### 📚 Présentation

Ce projet a pour objectif le développement d'un tableau de bord d'analytique de coaching sportif. <br>
Il vise à intégrer des graphiques et des diagrammes en utilisant React et à récupérer des données via une API. <br>
Pour le moment, il se concentre sur le tableau de bord de l'utilisateur. <br>
Il existe actuellement une simulation d'authentification pour récupérer le statut (authentifié ou non) et l'identifiant de l'utilisateur. <br>
Ces informations sont stockées dans un contexte, afin d'y accéder depuis n'importe quelle page, et éventuellement gérer la sécurité des données en autorisant l'accès à certains éléments en fonction du statut. <br>
Cela permet également d'empêcher l'accès à une page avec un identifiant qui n'est pas celui de l'utilisateur connecté.<br>
Les données peuvent être simulées ou provenir d'une API, elles sont formatées pour permettre le remplissage des graphiques.

### 💡 Outils et technos

[![My Skills](https://skillicons.dev/icons?i=html,react,sass,vite,figma,github,pnpm,recharts)](https://skillicons.dev)

### 🔨 Installation du projet

Le projet utilise NodeJS et `pnpm`<br>

➡ Cloner le projet<br>
➡ Ouvrir le dossier dans VSCode (ou tout autre IDE)<br>
➡ Installer les nodes-modules : `pnpm install`<br>

### 🚀 Lancement du projet

➡ Lancer l'application : `pnpm run dev`<br>

➡ Lancer l'API : <br>
[Repository de l'API](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)<br>
Suivre les instructions du README lié à l'API.<br>

Par défaut, le programme utilise des données simulées, cela permet de faire fonctionner le site même si l'API n'est pas démarrée.<br>
Pour modifier cela, il suffit d'aller dans le fichier services/api.jsx et de modifier la ligne 8 : <br>
![Modifier la source des données](src/assets/images/mock-api.png)

### ⚙ Contraintes techniques

➡ Pour les graphiques : D3 ou recharts<br>
➡ Intégration Desktop - écrans d’au moins 1024 par 780 pixels (responsive non obligatoire)<br>
➡ Réalisation des calls API en dehors des composants<br>
➡ Utilisation de données mockées pour commencer<br>
➡ Standardisation des données venant de l’API<br>
➡ Récupération des services auprès d’une API externe, les formater et les envoyer à une librairie de composants<br>

### 🏆 Compétences évaluées

➡ Assurer la qualité des données d'une application<br>
➡ Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript<br>
➡ Interagir avec un service Web<br>

# English version

## Develop an analytics dashboard with React

![Website screenshot](src/assets/images/screenshot.png)

### 📚 Presentation

This project aims to develop an analytics dashboard for sports coaching. <br>
It aims to integrate charts and diagrams using React and retrieve data via an API. <br>
For now, it focuses on the user dashboard. <br>
There is currently a simulation of authentication to retrieve the status (authenticated or not) and the user's identifier. <br>
This information is stored in a context, to access it from any page, and potentially manage data security by allowing access to certain elements based on the status. <br>
This also prevents access to a page with an identifier that is not that of the logged-in user.<br>
Data can be mocked or come from an API, and it is formatted to allow filling the charts.

### 💡 Tools and Technologies

[![My Skills](https://skillicons.dev/icons?i=html,react,sass,vite,figma,github,pnpm,recharts)](https://skillicons.dev)

### 🔨 Project Installation

The project uses NodeJS and `pnpm`<br>

➡ Clone the project<br>
➡ Open the folder in VSCode (or any other IDE)<br>
➡ Install node-modules: pnpm install<br>

### 🚀 Project Launch

➡ Launch the application: `pnpm run dev`<br>

➡ Launch the API: <br>
[API repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)<br>
Follow the instructions in the API README.<br>

By default, the program uses simulated data, this allows the site to function even if the API is not started.<br>
To change this, simply go to the services/api.jsx file and modify line 8: <br>
![Change data source](src/assets/images/mock-api.png)

### ⚙ Technical Constraints

➡ For charts: D3 or recharts<br>
➡ Desktop Integration - screens of at least 1024 by 780 pixels (responsive not mandatory)<br>
➡ Making API calls outside components<br>
➡ Use of simulated data to start<br>
➡ Standardization of data coming from the API<br>
➡ Retrieval of services from an external API, formatting them, and sending them to a component library<br>

### 🏆 Evaluated Skills

➡ Ensure data quality in an application<br>
➡ Develop advanced graphical elements using JavaScript libraries<br>
➡ Interact with a Web service<br>
