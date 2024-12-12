// Importation de la fonction createContext à partir de la bibliothèque React.
// createContext est utilisé pour créer un contexte dans lequel vous pouvez passer des données à travers le composant sans avoir à les passer explicitement à chaque niveau de la hiérarchie.
import { createContext } from "react";

// Création d'un nouveau contexte nommé CartContext avec une valeur par défaut de null.
// CartContext sera utilisé pour stocker et accéder aux informations du panier dans toute l'application.
export const CartContext = createContext(null);
