
# ArgentBank Projet 10 OC  

Parcours integrateur web

## Mise à niveau avec la version 12 de nodejs (recommandé pour ce projet) Backend

1. Installation de nvs (pour gérer les versions de nodejs et switcher entre elles pour les differents projets), ici on utilise donc la version 12 de nodejs
J'ai voulu d'abord installé nvm mais cela m'a causé des confilts et autres pbs, du coup j'ai opté pour nvs qui permet également de gérer les differentes version deNodejs

2. Création du fichier .node-version (dans le Backend) qui permet donc à nvs de reconnaître exactement la version de Nodejs sur laquelle le projet fonctionne (ici la version 12.22.12)

3. Dans le terminal en étant placé dossier P10_OC_ArgentBank : 
utiliser ceci:
cd c:\Users\adbon\Documents\P10_OC_ArgentBank
```
powershell
nvs auto
```
Cette commande permet de lier le backend à la version nodeJS v12.22.12
Pour le vérifier : 
```
Powershell
node -v
```
La réponse du terminal doit être pour ce projet : 12.22.12
 Pour que nvs reconnaisse la version de Nodejs : nvs auto
Cette commande va lire le fichier .node-version 

4. A chaque Ouverture du projet pour que NodeJs soit en version 12.22.12 il faut utiliser la commande : `nvs auto` 
Ne pas utiliser, ici,  `nvs use 12.22.12` (ne tient pas compte du fichier .node-version, Temporaire, force l'utilisation de nodeJs v12.22.12 en manuel, peut être utilser mais ici, j'ai créer un fichier .node-version pour l'éviter)

5. Pour rendre automatique l'utilisation de la version nodeJs utilisée dans le projet utiliser `nvs link 12.22.12/x64`, cela crée un lien permanent pour ce dossier, défini nodeJS v12.22.12 comme version par défaut pour ce projet, s'active automatiquement quand on entre dans le dossier du projet.
Du coup, j'utilsie cette solution pour ce projet (si cela fonctionne!!!)

## Installation base de données MongoDB

1. Télécharger MongoDB : https://www.mongodb.com/try/download/community
2. Lancer MongoDB
3. Vérifier les données de la base de données (deux users dans la base de données)


## Installation Backend

1. Cloner le projet : `git clone https://github.com/OpenClassrooms/OC-P10-ArgentBank-Backend.git`
2. Ouvrir la console d'administration de Vite : `npm run dev:server`

## Installation Frontend

1. Cloner le projet : `git clone https://github.com/OpenClassrooms/OC-P10-ArgentBank-Frontend.git`
2. Ouvrir la console d'administration de Vite : `npm run dev`


## Creation de l'application avec vite

1.  Ouvrir le terminal : `cd ArgentBank-Frontend`
2. Ouvrir le terminal : `create vite@latest . -- --template react`
3. Ouvrir le terminal : `npm install`
4. Ouvrir le terminal : `npm run dev`


Pour le Frontend utilisation de la version lts de NodeJS
