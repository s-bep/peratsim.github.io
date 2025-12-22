import type { Metadata } from 'next';
import { ArrowRight, Code, Shield, Zap, Cpu, BookOpen, Network } from 'lucide-react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export const metadata: Metadata = {
  title: 'Pératsim Innovation - Partenaire technologique pour votre transformation digitale',
  description:
    'Voir plus clair, agir plus juste. Solutions logicielles, infrastructures, cybersécurité, automatisation et conseil stratégique pour votre excellence opérationnelle.',
};

import { Check } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Développement Logiciel',
      description: 'Applications web et mobiles performantes, plateformes de gestion métier, solutions sur mesure.',
    },
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Protection des infrastructures et données, audits de vulnérabilités, stratégies de sécurité.',
    },
    {
      icon: Zap,
      title: 'Automatisation & Robotique',
      description: 'Solutions d&apos;automatisation des processus, robots industriels, drones autonomes.',
    },
    {
      icon: Cpu,
      title: 'Consulting',
      description: 'Audit technologique, stratégie digitale, accompagnement de transformation digitale.',
    },
    {
      icon: BookOpen,
      title: 'Formation',
      description: 'Formation aux nouvelles technologies, certification des équipes, accompagnement au changement.',
    },
    {
      icon: Network,
      title: 'Infrastructures Réseaux',
      description: 'Conception et déploiement de réseaux LAN/WAN, télécommunications, sécurisation réseau.',
    },
  ];

  const sectors = [
    {
      name: 'Industrie',
      icon: '🏭',
      description: 'Automatisation des chaînes de production, maintenance prédictive, contrôle qualité par IA.',
      features: ['Automatisation chaînes de production', 'Maintenance prédictive', 'Contrôle qualité par vision IA', 'Optimisation énergétique', 'Gestion intelligente des stocks', 'Robots collaboratifs'],
    },
    {
      name: 'Agroalimentaire',
      icon: '🥫',
      description: 'Traçabilité intelligente, contrôle qualité automatisé, optimisation des processus.',
      features: ['Traçabilité intelligente', 'Contrôle qualité automatisé', 'Optimisation des processus', 'Gestion des chaînes du froid', 'Prédiction des rendements', 'Supply chain optimisée'],
    },
    {
      name: 'Agriculture',
      icon: '🌾',
      description: 'Agriculture de précision, robots autonomes, prédiction des maladies, gestion intelligente.',
      features: ['Agriculture de précision avec drones', 'Robots pour désherbage et récolte', 'Optimisation de l&apos;irrigation', 'Prédiction des maladies', 'Gestion intelligente des exploitations', 'Agriculture urbaine'],
    },
    {
      name: 'Gestion de l&apos;Eau',
      icon: '💧',
      description: 'Monitoring en temps réel, détection de fuites, optimisation des réseaux de distribution.',
      features: ['Monitoring en temps réel', 'Détection de fuites par IA', 'Optimisation des réseaux', 'Gestion intelligente de l&apos;irrigation', 'Traitement de l&apos;eau', 'Prédiction de la demande'],
    },
    {
      name: 'Santé',
      icon: '⚕️',
      description: 'Diagnostic assisté par IA, optimisation des processus médicaux, systèmes de gestion.',
      features: ['Diagnostic assisté par IA', 'Prédiction épidémiologique', 'Gestion hospitalière', 'Dossiers patients numériques', 'Optimisation des ressources', 'Traçabilité des traitements'],
    },
    {
      name: 'Secteur Financier',
      icon: '💰',
      description: 'Détection fraude, scoring crédit IA, conformité réglementaire, robo-advisory.',
      features: ['Détection fraude temps-réel', 'Scoring crédit par IA', 'Conformité AML', 'Robo-advisory', 'Gestion des risques', 'Systèmes de paiement sécurisés'],
    },
  ];

  const expertise = [
    { title: 'Développement Logiciel', icon: Code },
    { title: 'Cybersécurité', icon: Shield },
    { title: 'Intelligence Artificielle', icon: Cpu },
    { title: 'Communication Digitale', icon: Network },
    { title: 'Solutions Matérielles', icon: Zap },
    { title: 'Veille Technologique', icon: BookOpen },
  ];

  const method = [
    {
      step: '1',
      title: 'Analyse',
      description: 'Audit complet de vos besoins et identification des opportunités d&apos;amélioration',
    },
    {
      step: '2',
      title: 'Développement',
      description: 'Conception et déploiement de solutions adaptées à vos spécificités',
    },
    {
      step: '3',
      title: 'Accompagnement',
      description: 'Formation de vos équipes et support continu pour optimiser l&apos;adoption',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 justify-center bg-primary-600 text-white">
              Bienvenue à Pératsim Innovation
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Voir plus clair, <span className="text-gradient bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">agir plus juste</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
              Partenaire technologique complet pour votre transformation digitale. Solutions logicielles, infrastructures, cybersécurité, automatisation et conseil stratégique pour votre excellence opérationnelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                Découvrez nos solutions
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900">
                Consultation gratuite
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="primary">Qui sommes-nous</Badge>
              <Heading level={2} className="mb-6">Votre expert en transformation digitale</Heading>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Pératsim Innovation accompagne les entreprises dans leur quête d&apos;excellence opérationnelle et d&apos;innovation stratégique. Experts en technologies avancées, nous vous accompagnons dans le développement logiciel, la cybersécurité, les infrastructures réseaux, les solutions d&apos;automatisation et l&apos;accompagnement stratégique.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-900">Notre mission</p>
                  <p className="text-neutral-600">Optimiser vos processus par des solutions technologiques innovantes</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Notre vision</p>
                  <p className="text-neutral-600">Accompagner durablement votre croissance par l&apos;innovation</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <Heading level={3} className="text-center">Logo Pératsim</Heading>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 justify-center" variant="primary">Nos services</Badge>
            <Heading level={2} className="mb-4">Un écosystème complet pour votre transformation digitale</Heading>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Six domaines d&apos;expertise pour couvrir tous vos besoins technologiques et stratégiques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} hover elevated className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-neutral-600 flex-1">{service.description}</p>
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <Button variant="ghost" size="sm">En savoir plus →</Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Expertise Section */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 justify-center" variant="secondary">Domaines de spécialisation</Badge>
            <Heading level={2} className="mb-4">Nos expertises techniques</Heading>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Compétences pluridisciplinaires pour résoudre vos défis technologiques complexes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-6 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
                  <Icon className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  <p className="font-semibold text-neutral-900">{item.title}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Method Section */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 justify-center" variant="accent">Notre approche</Badge>
            <Heading level={2} className="mb-4">Notre méthode prouvée</Heading>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Un processus structuré pour garantir votre succès
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {method.map((item, index) => (
              <div key={index} className="relative">
                <Card className="h-full">
                  <div className="text-4xl font-bold text-primary-600 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </Card>
                {index < method.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 w-8 h-0.5 bg-primary-300" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sectors Section */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 justify-center" variant="primary">Secteurs d&apos;intervention</Badge>
            <Heading level={2} className="mb-4">Solutions adaptées à chaque industrie</Heading>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Expertise sectorielle pour un impact maximal dans votre domaine d&apos;activité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} hover className="overflow-hidden">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{sector.icon}</span>
                  <div>
                    <h3 className="text-2xl font-semibold">{sector.name}</h3>
                  </div>
                </div>
                <p className="text-neutral-600 mb-6">{sector.description}</p>
                <ul className="space-y-2">
                  {sector.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-500 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 text-center max-w-2xl mx-auto">
          <Heading level={2} className="text-white mb-4">
            Prêt à transformer vos défis technologiques en opportunités ?
          </Heading>
          <p className="text-primary-100 text-lg mb-8">
            Consultez nos experts gratuitement pour explorer les opportunités d&apos;innovation dans votre secteur.
          </p>
          <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
            Réserver une consultation gratuite
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Container>
      </section>
    </main>
  );
}

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
