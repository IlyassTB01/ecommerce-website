// Importation de l'instance d'axiosClient configurée à partir du fichier axiosClient.js.
// axiosClient est une instance pré-configurée d'axios avec l'URL de base et les en-têtes nécessaires.
const { default: axiosClient } = require("./axiosClient");

// Fonction pour obtenir les produits les plus récents.
// Cette fonction fait une requête GET à l'endpoint '/products' avec la requête query 'populate=*' pour inclure toutes les relations.
const getLatestProducts = () => axiosClient.get('/products?populate=*');

// Fonction pour obtenir un produit par son ID.
// Cette fonction fait une requête GET à l'endpoint '/products/{id}' avec la requête query 'populate=*' pour inclure toutes les relations.
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);

// Fonction pour obtenir des produits par catégorie.
// Cette fonction fait une requête GET à l'endpoint '/products' avec un filtre sur la catégorie spécifiée et la requête query 'populate=*' pour inclure toutes les relations.
const getProductsByCategory = (category) => axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);

// Exportation des fonctions définies pour une utilisation dans d'autres parties de l'application.
// Cela permet d'appeler ces fonctions pour effectuer des requêtes API spécifiques aux produits.
export default {
    getLatestProducts,
    getProductById,
    getProductsByCategory
};
