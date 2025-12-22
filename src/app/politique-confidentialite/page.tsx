import type { Metadata } from 'next';
import Container from '@/components/Container';
import Heading from '@/components/Heading';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données de Pératsim Innovation.',
  robots: 'index, follow',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="pt-20 pb-20">
      <Container className="max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <Heading level={1} className="mb-8">
            Politique de Confidentialité
          </Heading>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            Pératsim Innovation (&quot;nous&quot;, &quot;notre&quot; ou &quot;Pératsim&quot;) s'engage à
            protéger votre confidentialité. Cette Politique de Confidentialité explique comment nous
            collectons, utilisons, divulguons et exploitons autrement vos informations.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Informations Que Nous Collectons</h2>
          <p>Les informations que nous collectons incluent :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Informations personnelles</strong> : Nom, adresse e-mail, numéro de téléphone,
              localisation
            </li>
            <li>
              <strong>Informations de compte</strong> : Données de connexion, historique d'accès
            </li>
            <li>
              <strong>Données de navigation</strong> : Cookies, fichiers journaux, adresse IP
            </li>
            <li>
              <strong>Données de communication</strong> : Contenu des messages, tickets de support
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Utilisation des Informations</h2>
          <p>Nous utilisons vos informations pour :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fournir nos services et applications</li>
            <li>Améliorer et personnaliser votre expérience</li>
            <li>Vous envoyer des communications marketing</li>
            <li>Respecter les obligations légales</li>
            <li>Maintenir la sécurité et la fraude</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Partage des Informations</h2>
          <p>
            Nous ne vendons, n'échangeons ni ne louons vos informations personnelles aux tiers, sauf
            si requis par la loi ou avec votre consentement explicite.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Sécurité des Données</h2>
          <p>
            Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations
            contre l'accès, l'altération, la divulgation ou la destruction non autorisés.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Droits de l'Utilisateur</h2>
          <p>Vous avez le droit de :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Accéder à vos données personnelles</li>
            <li>Rectifier les informations inexactes</li>
            <li>Demander la suppression de vos données</li>
            <li>Vous opposer au traitement</li>
            <li>Demander une portabilité des données</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies</h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez contrôler les
            cookies à travers les paramètres de votre navigateur.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Modifications de Cette Politique</h2>
          <p>
            Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment.
            Les modifications entrront en vigueur immédiatement.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Nous Contacter</h2>
          <p>
            Pour toute question concernant cette Politique de Confidentialité, veuillez nous contacter
            à :
          </p>
          <ul className="list-none pl-0 space-y-1">
            <li>📧 Email: contact@peratsim.com</li>
            <li>📞 Téléphone: +226 77 55 45 09</li>
            <li>📍 Adresse: Ouagadougou, Burkina Faso</li>
          </ul>

          <p className="text-neutral-600 text-sm mt-8 pt-8 border-t border-neutral-200">
            Dernière mise à jour: 22 Décembre 2025
          </p>
        </div>
      </Container>
    </main>
  );
}
