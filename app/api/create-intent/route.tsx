// Importation de NextResponse depuis next/server pour créer des réponses HTTP dans une application Next.js.
import { NextResponse } from "next/server";

// Importation de la bibliothèque Stripe pour gérer les paiements.
import Stripe from "stripe";

// Initialisation d'une instance Stripe avec la clé secrète provenant des variables d'environnement.
// typescript: true indique que nous utilisons TypeScript, et apiVersion spécifie la version de l'API Stripe.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2023-08-16",
});

// Fonction asynchrone pour gérer les requêtes POST.
// Cette fonction reçoit une requête, extrait les données JSON de la requête et crée une intention de paiement (payment intent) via Stripe.
export async function POST(request: any) {
  // Extraction des données de la requête.
  const data: any = await request.json();
  const amount = data.amount; // Récupération du montant de la requête.

  try {
    // Création d'une intention de paiement avec le montant spécifié, converti en cents (centièmes de dollar).
    // La devise utilisée est l'USD.
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100, // Conversion du montant en cents.
      currency: "USD",
    });

    // Renvoi de la réponse avec le client_secret de l'intention de paiement en format JSON.
    // Le statut de la réponse est 200 (OK).
    return NextResponse.json(paymentIntent.client_secret, { status: 200 });
  } catch (error: any) {
    // Gestion des erreurs : renvoi d'une réponse avec l'erreur et un statut 400 (Bad Request).
    return new NextResponse(error, {
      status: 400,
    });
  }
}
