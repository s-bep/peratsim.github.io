import type { Metadata } from 'next';
import Container from '@/components/Container';
import Heading from '@/components/Heading';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales et conditions d\'utilisation de Pératsim Innovation.',
  robots: 'index, follow',
};

export default function MentionsLegalesPage() {
  return (
    <main className="pt-20 pb-20">
      <Container className="max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <Heading level={1} className="mb-8">
            Mentions Légales
          </Heading>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Identité de l'Éditeur</h2>
          <p>
            <strong>Dénomination :</strong> Pératsim Innovation
            <br />
            <strong>Forme juridique :</strong> SARL
            <br />
            <strong>Siège social :</strong> Ouagadougou, Burkina Faso
            <br />
            <strong>Email :</strong> contact@peratsim.com
            <br />
            <strong>Téléphone :</strong> +226 77 55 45 09
            <br />
            <strong>Directeur de la publication :</strong> Dr. Youssouf Cissé
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Hébergement et Services</h2>
          <p>
            <strong>Hébergeur :</strong> Vercel (USA)
            <br />
            <strong>Prestataire DNS :</strong> Cloudflare
            <br />
            <strong>Analytics :</strong> Google Analytics & Cloudflare Analytics
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Propriété Intellectuelle</h2>
          <p>
            Tous les éléments contenus sur ce site (textes, images, logos, vidéos, etc.) sont la
            propriété exclusive de Pératsim Innovation ou de ses contributeurs. Aucune partie du
            contenu ne peut être reproduite sans autorisation préalable écrite.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Conditions d'Utilisation</h2>
          <p>L'accès et l'utilisation du site sont soumis aux conditions suivantes :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ne pas utiliser le site à des fins illégales ou frauduleuses</li>
            <li>Ne pas modifier, copier ou distribuer le contenu sans permission</li>
            <li>Respecter les droits d'auteur et propriété intellectuelle</li>
            <li>Ne pas accéder aux données de manière non autorisée</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Responsabilité</h2>
          <p>
            Pératsim Innovation met tout en œuvre pour assurer la qualité et la précision des
            informations. Cependant, nous ne pouvons pas garantir l'absence d'erreurs ou
            l'exhaustivité des données. L'utilisation du site se fait à vos risques et périls.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation de Responsabilité</h2>
          <p>
            Sauf disposition légale contraire, Pératsim Innovation ne sera pas responsable pour les
            dommages directs, indirects, accessoires ou consécutifs découlant de l'utilisation ou de
            l'incapacité à utiliser le site.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Liens Externes</h2>
          <p>
            Le site peut contenir des liens vers des sites externes. Pératsim Innovation ne contrôle
            pas le contenu de ces sites tiers et ne peut pas être tenu responsable de leur contenu.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Modification des Conditions</h2>
          <p>
            Pératsim Innovation se réserve le droit de modifier ces mentions légales à tout moment.
            Les modifications entreront en vigueur dès leur publication.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Droit Applicable</h2>
          <p>
            Ces mentions légales sont régies par la loi applicable au Burkina Faso. Tout différend
            sera soumis à la juridiction compétente.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Recours</h2>
          <p>
            Pour tout litige ou réclamation, veuillez d'abord nous contacter afin de résoudre la
            question amiablement.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact</h2>
          <p>
            Pour toute question concernant ces mentions légales, veuillez nous contacter à :
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
