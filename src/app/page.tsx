import type { Metadata } from 'next';
import { ArrowRight, Check, Zap, Shield, Cpu, Leaf, TrendingUp, Globe } from 'lucide-react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export const metadata: Metadata = {
  title: 'Accueil',
  description:
    'Transformez votre vision en réalité avec nos solutions premium d\'Intelligence Artificielle et automatisation.',
};

export default function Home() {
  const features = [
    {
      icon: Cpu,
      title: 'Intelligence Artificielle',
      description: 'Solutions IA avancées pour l\'optimisation des processus et la prise de décision intelligente.',
    },
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Protection maximale de vos données avec des solutions de sécurité de classe mondiale.',
    },
    {
      icon: Zap,
      title: 'Automatisation',
      description: 'Automatisez vos flux de travail et augmentez votre productivité exponentiellement.',
    },
    {
      icon: Leaf,
      title: 'IA Durable',
      description: 'Solutions écologiques et responsables pour une transformation digitale éthique.',
    },
    {
      icon: TrendingUp,
      title: 'Optimisation',
      description: 'Augmentez vos performances avec l\'analyse de données et la prédiction intelligente.',
    },
    {
      icon: Globe,
      title: 'Solutions Globales',
      description: 'Expertise internationale adaptée à votre contexte local et secteur d\'activité.',
    },
  ];

  const solutions = [
    {
      title: 'Industrie 4.0',
      description: 'Modernisez votre infrastructure industrielle avec l\'IoT et l\'IA.',
      features: ['Maintenance prédictive', 'Optimisation de production', 'Traçabilité'],
      icon: '🏭',
    },
    {
      title: 'Agriculture Numérique',
      description: 'Révolutionnez vos pratiques agricoles avec l\'IA et la data.',
      features: ['Prévisions météo', 'Rendement optimal', 'Drones autonomes'],
      icon: '🌾',
    },
    {
      title: 'Fintech & Banque',
      description: 'Solutions financières sécurisées et conformes aux normes.',
      features: ['Détection fraude', 'Scoring crédit', 'Conformité réglementaire'],
      icon: '💰',
    },
    {
      title: 'Santé & IA',
      description: 'Améliorer les diagnostics et optimiser les processus médicaux.',
      features: ['Analyse médicale', 'Prédiction épidémiologique', 'Gestion hospitalière'],
      icon: '⚕️',
    },
  ];

  const testimonials = [
    {
      name: 'Youssouf Cissé',
      role: 'Directeur Général, Enterprise XYZ',
      quote:
        'Pératsim a transformé notre approche de la digitalisation. Les résultats ont dépassé nos attentes.',
      avatar: '👨‍💼',
    },
    {
      name: 'Mariam Diallo',
      role: 'CTO, Tech Innovation Ltd',
      quote:
        'L\'expertise en IA de Pératsim est incomparable. Un partenaire de confiance pour notre transformation.',
      avatar: '👩‍💼',
    },
    {
      name: 'Kassoum Traoré',
      role: 'Ministre Digital',
      quote:
        'Les solutions de Pératsim contribuent significativement à la transformation digitale de notre région.',
      avatar: '🎩',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 -z-10" />

        <Container>
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-6 justify-center">
              🚀 Bienvenue à Pératsim Innovation
            </Badge>

            <Heading level={1} className="mb-6">
              L&apos;Intelligence Artificielle de classe <span className="text-gradient">mondiale</span>
            </Heading>

            <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
              Transformez votre vision en réalité avec nos solutions premium d&apos;IA, développement logiciel et
              automatisation. Partenaire technologique stratégique pour les entreprises innovantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="group">
                Commencer gratuitement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Découvrir nos solutions
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <div className="text-2xl font-bold text-primary-600">50+</div>
                <p className="text-neutral-600">Projets réussis</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">15+</div>
                <p className="text-neutral-600">Ans d&apos;expertise</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <p className="text-neutral-600">Satisfaction clients</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 justify-center" variant="secondary">
              Nos services
            </Badge>
            <Heading level={2} className="mb-4">
              Solutions complètes et intégrées
            </Heading>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Une approche holistique pour votre transformation digitale, du conseil à l&apos;implémentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover elevated>
                  <Icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 justify-center" variant="accent">
              Par secteur
            </Badge>
            <Heading level={2} className="mb-4">
              Solutions métier spécialisées
            </Heading>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Expertise adaptée à votre secteur d&apos;activité pour un impact maximal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} hover className="overflow-hidden">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-neutral-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                      <Check className="w-4 h-4 text-primary-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 justify-center" variant="primary">
              Nos clients
            </Badge>
            <Heading level={2} className="mb-4">
              Témoignages de confiance
            </Heading>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} elevated>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{testimonial.avatar}</span>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-neutral-700 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <Container className="text-center max-w-2xl">
          <Heading level={2} className="text-white mb-4">
            Prêt à transformer votre business ?
          </Heading>
          <p className="text-primary-100 text-lg mb-8">
            Consultez nos experts gratuitement pour explorer les opportunités d&apos;IA dans votre secteur.
          </p>
          <Button size="lg" variant="secondary">
            Réserver une consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Container>
      </section>
    </main>
  );
}
