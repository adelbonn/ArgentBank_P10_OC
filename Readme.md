# Argent Bank - Application Bancaire

## Table des matières

- [À propos](#à-propos)
- [Technologies Utilisées](#technologies-utilisées)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Prérequis](#prérequis)
- [Installation](#installation)
  - [1. Backend](#1-backend)
  - [2. Frontend](#2-frontend)
- [Fonctionnalités](#fonctionnalités)
- [Documentation](#documentation)
  - [API Endpoints](#api-endpoints)
  - [Comptes de Test](#comptes-de-test)
- [Bonnes Pratiques](#bonnes-pratiques)
  - [Green Code](#green-code)
  - [Redux Best Practices](#redux-best-practices)
- [Auteur](#auteur)

## À propos

Argent Bank est une application bancaire permettant aux utilisateurs de se connecter et de gérer leurs comptes et leur profil. Ce projet utilise React pour le frontend et une API RESTful pour le backend.

## Technologies Utilisées

### Frontend

- React 19 avec Vite
- Redux Toolkit pour la gestion d'état
- React Router pour la navigation
- Axios pour les requêtes HTTP
- Vite comme bundler

### Backend

- Node.js v12.22.12
- Express
- MongoDB
- JWT pour l'authentification

## Prérequis

- Node.js v12.22.12
- MongoDB
- Git

## Installation

### 1. Backend

```bash
cd ArgentBank-Backend
npm install
npm run dev:server    # Démarre le serveur sur le port 3001
npm run populate-db   # Pour peupler la base de données avec des données de test

```

### 2. Frontend

```bash
cd ArgentBank-Frontend
npm install
npm run dev
```

## Fonctionnalités

- Authentification des utilisateurs
- Gestion des comptes utilisateur
- Connexion/déconnexion des utilisateursde manière sécurisée
- Gestion ds erreurs si username ou mdp incorrect
- L'utilisateur peut voir ses infromations uniquement après s'être connecté avec succès
- Affichage des transactions
- Interface web responsive et complète

## Documentation

### API Endpoints

Documentation Swagger disponible sur : `http://localhost:3001/api-docs`

Points d'accès principaux :

- `POST /api/v1/user/login` - Authentification
- `POST /api/v1/user/signup` - Création de compte
- `POST /api/v1/user/profile` - Récupération du profil
- `PUT /api/v1/user/profile` - Mise à jour du profil

### Comptes de Test

```plaintext
Tony Stark
- Email: tony@stark.com
- Password: password123

Steve Rogers
- Email: steve@rogers.com
- Password: password456
```

## Bonnes Pratiques

### Green Code

- Optimisation des images et assets
- Lazy loading des composants React
- Minimisation des requêtes API
- Utilisation de Redux pour le cache local

### Redux Best Practices

- Utilisation des slices Redux Toolkit
- Actions et reducers typés
- Gestion d'état optimisée
- Sélecteurs mémorisés

## Auteur

[Adeline Bonnamour] - Projet réalisé dans le cadre de la formation OpenClassrooms
