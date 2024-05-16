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

➡ Télécharger le dossier du code et le dézipper<br>
➡ Ouvrir le dossier dans VSCode (ou tout autre IDE)<br>
➡ Installer les nodes-modules : `pnpm install`<br>

### 🚀 Lancement du projet

➡ Lancer l'API : <br>
[Repository de l'API](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)<br>
Suivre les instructions du README lié à l'API.<br>

➡ Lancer l'application : `pnpm run dev`<br>

Par défaut, le programme utilise des données simulées.<br>
Pour modifier cela, il suffit d'aller dans le fichier services/api.jsx et de modifier la ligne 8 : <br>
![Visuel du site](src/assets/images/mock-api.png)

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
