// Importation du module axios avec une syntaxe de déstructuration pour obtenir la valeur par défaut d'axios.
// axios est une bibliothèque HTTP basée sur les promesses pour faire des requêtes HTTP depuis le navigateur et node.js.
const { default: axios } = require('axios');

// Récupération de la clé API à partir des variables d'environnement.
// NEXT_PUBLIC_REST_API_KEY doit être définie dans votre fichier d'environnement pour que l'application puisse accéder à l'API en toute sécurité.
const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;

// Définition de l'URL de base de l'API.
// Cela permet de centraliser l'URL de l'API et de faciliter sa modification si nécessaire.
const apiUrl = 'http://localhost:1337/api';

// Création d'une instance d'axios avec des configurations par défaut.
// Cette instance utilise l'URL de base définie précédemment et ajoute un en-tête Authorization avec le jeton Bearer.
const axiosClient = axios.create({
    baseURL: apiUrl, // URL de base pour toutes les requêtes HTTP
    headers: {
        Authorization: `Bearer ${apiKey}` // Ajout du jeton d'authentification aux en-têtes des requêtes
    }
});

export default axiosClient;
