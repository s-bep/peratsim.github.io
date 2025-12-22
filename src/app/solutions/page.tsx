import type { Metadata } from 'next';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Solutions IA spécialisées par secteur d&apos;activité.',
};

const sectors = [
  {
    name: 'Industrie 4.0',
    icon: '🏭',
    description: 'Transformez votre production avec l\'IA et l\'IoT',
    features: [
      'Maintenance prédictive',
      'Optimisation des processus',
      'Contrôle qualité automatisé',
      'Gestion intelligente de stock',
    ],
    benefits: ['30-40% amélioration productivité', '25% réduction des défauts', '20% économies énergétiques'],
  },
  {
    name: 'Agriculture Numérique',
    icon: '🌾',
    description: 'Modernisez vos pratiques agricoles',
    features: [
      'Prévisions météo précises',
      'Optimisation des rendements',
      'Drones autonomes',
      'Analyse des sols',
    ],
    benefits: ['35% augmentation rendement', '40% réduction intrants', 'Traçabilité complète'],
  },
  {
    name: 'Finance & Banque',
    icon: '💰',
    description: 'Solutions sécurisées et conformes',
    features: [
      'Détection fraude temps-réel',
      'Scoring crédit IA',
      'Conformité réglementaire',
      'Robo-advisory',
    ],
    benefits: ['95% détection fraude', 'Conformité AML', 'Expérience client +40%'],
  },
  {
    name: 'Santé & Healthcare',
    icon: '⚕️',
    description: 'Améliorez les diagnostics et la gestion',
    features: [
      'Analyse médicale IA',
      'Prédiction épidémiologique',
      'Gestion hospitalière',
      'Telemedicine',
    ],
    benefits: ['Diagnostic 85% précis', '30% réduction coûts', 'Accessibilité +60%'],
  },
  {
    name: 'E-commerce & Retail',
    icon: '🛍️',
    description: 'Optimisez vos ventes en ligne',
    features: [
      'Recommandation produits',
      'Prévision demande',
      'Chatbot IA',
      'Analyse comportement client',
    ],
    benefits: ['25% augmentation ventes', '40% réduction retours', 'Satisfaction +35%'],
  },
  {
    name: 'Éducation',
    icon: '📚',
    description: 'Personnalisez l\'apprentissage',
    features: [
      'Parcours apprentissage adaptatif',
      'Tuteurs virtuels IA',
      'Analyse performance',
      'Détection difficultés',
    ],
    benefits: ['30% amélioration résultats', 'Engagement +45%', 'Dropout -25%'],
  },
];

export default function SolutionsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 justify-center">Solutions Sectorielles</Badge>
            <Heading level={1} className="mb-6">
              L&apos;IA adaptée à votre secteur
            </Heading>
            <p className="text-xl text-neutral-600">
              Découvrez comment nos solutions transforment les différents secteurs économiques avec une
              expertise spécialisée.
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} hover elevated>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{sector.icon}</div>
                  <Badge variant="primary">{index + 1}</Badge>
                </div>

                <h3 className="text-2xl font-bold mb-2">{sector.name}</h3>
                <p className="text-neutral-600 mb-6">{sector.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm uppercase text-neutral-500 mb-3">Capacités</h4>
                  <ul className="space-y-2">
                    {sector.features.map((feature, i) => (
                      <li key={i} className="text-sm text-neutral-700 flex items-start gap-2">
                        <span className="text-primary-600 mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-neutral-200">
                  <h4 className="font-semibold text-sm uppercase text-neutral-500 mb-3">Bénéfices</h4>
                  <div className="space-y-2">
                    {sector.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-secondary-500" />
                        <span className="text-neutral-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" fullWidth className="mt-6">
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Implementation Process */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Heading level={2} className="mb-4">
                Notre approche
              </Heading>
              <p className="text-neutral-600">
                Un processus éprouvé en 4 phases pour garantir le succès de votre projet.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: 'Diagnostic',
                  description: 'Analyse approfondie de vos besoins et opportunités IA',
                },
                {
                  phase: 'Design',
                  description: 'Conception de la solution adaptée à votre contexte',
                },
                {
                  phase: 'Implémentation',
                  description: 'Développement et intégration avec vos systèmes',
                },
                {
                  phase: 'Support',
                  description: 'Maintenance, formation et optimisation continue',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg mb-2">
                      {index + 1}
                    </div>
                    {index < 3 && <div className="w-1 h-20 bg-primary-200" />}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold mb-2">{item.phase}</h4>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <Container className="text-center max-w-2xl">
          <Heading level={2} className="text-white mb-4">
            Prêt à transformer votre secteur ?
          </Heading>
          <p className="text-primary-100 text-lg mb-8">
            Consultez nos experts pour explorer les opportunités d&apos;IA spécifiques à votre industrie.
          </p>
          <Button size="lg" variant="secondary">
            Demander une consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Container>
      </section>
    </main>
  );
}
