// Importation de la bibliothèque Resend pour envoyer des emails.
import { Resend } from "resend";

// Importation du composant de modèle d'email.
import { EmailTemplate } from "../../_components/email-template";

// Initialisation d'une instance de Resend avec la clé API provenant des variables d'environnement.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  // Extraction du corps de la requête pour obtenir les données JSON.
  const body = await req.json();

  try {
    // Envoi de l'email en utilisant l'instance Resend.
    // Les détails de l'email incluent l'expéditeur, le destinataire, le sujet et le contenu généré à partir du modèle React.
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Adresse email de l'expéditeur.
      to: [body.email], // Adresse email du destinataire (extrait du corps de la requête).
      subject: "Orders From TBER ILYASS ECOMMERCCE ", // Sujet de l'email.
      react: EmailTemplate({ body }), // Contenu de l'email généré à partir du modèle React, en passant le corps de la requête comme props.
    });

    // Renvoi de la réponse avec les données de l'email envoyé en format JSON.
    return Response.json(data);
  } catch (error) {
    // Gestion des erreurs : renvoi d'une réponse avec l'erreur en format JSON.
    return Response.json({ error });
  }
}
