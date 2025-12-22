import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export const metadata: Metadata = {
  title: 'Tarifs',
  description: 'Plans et tarification transparents pour nos solutions IA et automatisation.',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      description: 'Pour les petites entreprises et startups',
      price: 2999,
      features: [
        'Consultation initiale gratuite',
        'Jusqu\'à 3 projets IA simples',
        'Support email',
        'Accès à la documentation',
        'Rapports mensuels',
      ],
      cta: 'Commencer',
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'Pour les PME en croissance',
      price: 9999,
      features: [
        'Consultation stratégique complète',
        'Projets IA illimités',
        'Support prioritaire 24/7',
        'Formation d\'équipe incluse',
        'Rapports personnalisés',
        'API access',
        'Intégrations personnalisées',
      ],
      cta: 'Démarrer maintenant',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'Pour les grandes entreprises',
      price: null,
      features: [
        'Solutions sur mesure',
        'Infrastructure dédiée',
        'Support 24/7 avec account manager',
        'Sécurité enterprise',
        'Conformité réglementaire',
        'SLA garantis',
        'Solutions propriétaires',
      ],
      cta: 'Demander un devis',
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: 'Puis-je changer de plan ?',
      answer:
        'Oui, vous pouvez changer de plan à tout moment. Les changements prennent effet au prochain cycle de facturation.',
    },
    {
      question: 'Y a-t-il un engagement minimum ?',
      answer:
        'Pour les plans Starter et Professional, pas d\'engagement minimum. Pour Enterprise, nous proposons des contrats annuels avec avantages spéciaux.',
    },
    {
      question: 'Acceptez-vous les paiements par crypto ?',
      answer:
        'Actuellement, nous acceptons les paiements par virement bancaire, carte de crédit et crypto-monnaies sur demande.',
    },
    {
      question: 'Quel est le coût des intégrations personnalisées ?',
      answer:
        'Les intégrations personnalisées sont évaluées au cas par cas. Nous proposons une consultation gratuite pour évaluer vos besoins.',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-6 justify-center">Tarification transparente</Badge>
            <Heading level={1} className="mb-4">
              Plans adaptés à tous les besoins
            </Heading>
            <p className="text-lg text-neutral-600">
              Des startups aux grandes entreprises, trouvez le plan qui convient à votre structure.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative transition-all duration-300 ${
                  plan.highlighted ? 'md:scale-105 md:-my-4' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Badge variant="secondary">Popular</Badge>
                  </div>
                )}

                <Card
                  elevated={plan.highlighted}
                  className={`h-full flex flex-col ${
                    plan.highlighted ? 'border-2 border-secondary-500' : ''
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-neutral-600 text-sm mb-6">{plan.description}</p>

                  <div className="mb-8">
                    {plan.price ? (
                      <>
                        <span className="text-4xl font-bold">${plan.price.toLocaleString()}</span>
                        <span className="text-neutral-600 ml-2">/mois</span>
                      </>
                    ) : (
                      <p className="text-2xl font-semibold text-primary-600">Personnalisé</p>
                    )}
                  </div>

                  <Button
                    variant={plan.highlighted ? 'secondary' : 'outline'}
                    fullWidth
                    className="mb-8"
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold">Professional</th>
                  <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {[
                  ['Projets', '3', 'Illimité', 'Illimité'],
                  ['Support', 'Email', '24/7 Prioritaire', '24/7 Dédié'],
                  ['Training', 'Non', 'Inclus', 'Complet'],
                  ['API Access', 'Non', 'Oui', 'Oui'],
                  ['SLA', 'Aucun', '99.5%', '99.99%'],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-4 px-4 font-medium text-neutral-900">{row[0]}</td>
                    <td className="py-4 px-4 text-center text-neutral-600">{row[1]}</td>
                    <td className="py-4 px-4 text-center text-neutral-600">{row[2]}</td>
                    <td className="py-4 px-4 text-center text-neutral-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">
                Questions fréquentes
              </Heading>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="group border border-neutral-200 rounded-lg">
                  <summary className="flex cursor-pointer items-center justify-between bg-neutral-50 px-6 py-4 font-semibold text-neutral-900 hover:bg-neutral-100">
                    {faq.question}
                    <span className="transition group-open:rotate-180">+</span>
                  </summary>
                  <p className="px-6 py-4 text-neutral-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <Container className="text-center max-w-2xl">
          <Heading level={2} className="text-white mb-4">
            Vous ne trouvez pas le plan idéal ?
          </Heading>
          <p className="text-primary-100 text-lg mb-8">
            Contactez notre équipe pour une consultation personnalisée et un devis sur mesure.
          </p>
          <Button size="lg" variant="secondary">
            Demander une consultation
          </Button>
        </Container>
      </section>
    </main>
  );
}
