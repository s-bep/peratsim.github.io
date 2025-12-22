'use client';

import { useState } from 'react';
import { ArrowRight, Code, Shield, Zap, Cpu, BookOpen, Network, Check } from 'lucide-react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Développement Logiciel',
      description: 'Nous concevons et développons des applications sur mesure, des plateformes web et mobiles performantes adaptées à vos besoins spécifiques.',
      features: [
        'Applications web et mobiles natives',
        'Plateformes de gestion métier',
        'Sites web et e-commerce',
        'Systèmes de gestion de données',
        'Intégrations et API sur mesure',
      ],
    },
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Nous protégeons vos infrastructures et données grâce à des solutions de cybersécurité avancées et des audits de vulnérabilités.',
      features: [
        'Audits de sécurité et tests de pénétration',
        'Protection des données et chiffrement',
        'Pare-feu et systèmes de détection',
        'Formation cybersécurité des équipes',
        'Conformité et gouvernance sécurité',
      ],
    },
    {
      icon: Zap,
      title: 'Automatisation & Robotique',
      description: 'Nous développons et déployons des solutions d&apos;automatisation et de robotique pour optimiser vos processus industriels.',
      features: [
        'Robots industriels et collaboratifs',
        'Drones pour inspection et surveillance',
        'Systèmes robotisés sur mesure',
        'Solutions d\'automatisation des processus',
        'Robotique pour l\'agriculture de précision',
      ],
    },
    {
      icon: Cpu,
      title: 'Consulting',
      description: 'Notre équipe d\'experts vous accompagne dans votre transformation digitale, de l\'audit initial à la mise en œuvre stratégique.',
      features: [
        'Audit et diagnostic technologique',
        'Stratégie de transformation digitale',
        'Études de faisabilité',
        'Accompagnement stratégique',
        'Conseil en cybersécurité et infrastructures',
      ],
    },
    {
      icon: BookOpen,
      title: 'Formation',
      description: 'Nous formons vos équipes aux nouvelles technologies pour garantir une adoption réussie et une utilisation optimale.',
      features: [
        'Formation sur les nouvelles technologies',
        'Accompagnement au changement',
        'Certification des équipes',
        'Support utilisateurs',
        'Ateliers pratiques et formations sur mesure',
      ],
    },
    {
      icon: Network,
      title: 'Infrastructures Réseaux',
      description: 'Nous concevons, installons et maintenons vos infrastructures réseaux et télécommunications pour une connectivité performante.',
      features: [
        'Conception et déploiement de réseaux LAN/WAN',
        'Infrastructures de télécommunications',
        'Sécurisation des réseaux d\'entreprise',
        'Maintenance et supervision réseau',
        'Solutions WiFi professionnelles',
      ],
    },
  ];

  const sectors = [
    {
      icon: '🏭',
      title: 'Industrie',
      isPriority: true,
      description: 'Nous proposons des solutions d\'automatisation et d\'IA pour optimiser la production, améliorer la qualité et réduire les coûts.',
      features: [
        'Automatisation des chaînes de production',
        'Maintenance prédictive des équipements',
        'Contrôle qualité par vision artificielle',
        'Optimisation énergétique',
        'Gestion intelligente des stocks',
        'Robots industriels collaboratifs',
      ],
    },
    {
      icon: '🥫',
      title: 'Agroalimentaire',
      isPriority: true,
      description: 'Nous développons des solutions technologiques pour améliorer la traçabilité, optimiser la production et garantir la qualité.',
      features: [
        'Systèmes de traçabilité intelligente',
        'Contrôle qualité automatisé',
        'Optimisation des processus de transformation',
        'Gestion des chaînes du froid',
        'Prédiction des rendements',
        'Logistique et supply chain optimisées',
      ],
    },
    {
      icon: '🌾',
      title: 'Agriculture',
      isPriority: true,
      description: 'Nous mettons l\'Intelligence Artificielle et la robotique au service d\'une agriculture plus productive et durable.',
      features: [
        'Agriculture de précision avec drones et capteurs',
        'Robots pour désherbage et récolte',
        'Optimisation de l\'irrigation',
        'Prédiction des maladies des cultures',
        'Gestion intelligente des exploitations',
        'Solutions pour l\'agriculture urbaine',
      ],
    },
    {
      icon: '💧',
      title: 'Gestion de l\'Eau',
      isPriority: true,
      description: 'Nous proposons des solutions innovantes pour une gestion optimale des ressources en eau, depuis le captage jusqu\'à la distribution.',
      features: [
        'Systèmes de monitoring en temps réel',
        'Détection de fuites par IA',
        'Optimisation des réseaux de distribution',
        'Gestion intelligente de l\'irrigation',
        'Traitement et purification de l\'eau',
        'Prédiction de la demande en eau',
      ],
    },
    {
      icon: '⚕️',
      title: 'Santé',
      isPriority: false,
      description: 'Solutions numériques pour la transformation de vos services de santé et l\'amélioration des soins.',
      features: [
        'Diagnostique assisté par IA',
        'Prédiction épidémiologique',
        'Gestion hospitalière intégrée',
        'Dossiers médicaux électroniques',
        'Télémédecine et monitoring à distance',
        'Systèmes d\'information santé',
      ],
    },
    {
      icon: '💰',
      title: 'Secteur Financier',
      isPriority: false,
      description: 'Solutions de sécurité financière et d\'automatisation pour l\'excellence opérationnelle du secteur bancaire.',
      features: [
        'Détection des fraudes par IA',
        'Notation de crédit intelligent',
        'Conformité réglementaire',
        'Conseil en robotique financière',
        'Systèmes de gestion des risques',
        'Automatisation des processus',
      ],
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
      description: 'Audit complet de vos besoins et identification des opportunités d\'amélioration',
    },
    {
      step: '2',
      title: 'Développement',
      description: 'Conception et déploiement de solutions adaptées à vos spécificités',
    },
    {
      step: '3',
      title: 'Accompagnement',
      description: 'Formation de vos équipes et support continu pour optimiser l\'adoption',
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'Quels types de services proposez-vous ?',
      answer: 'Nous proposons 6 services principaux : Développement Logiciel, Cybersécurité, Automatisation & Robotique, Consulting, Formation et Infrastructures Réseaux. Chaque service est adapté à vos besoins spécifiques.',
    },
    {
      question: 'Quel est le délai moyen pour un projet ?',
      answer: 'Le délai dépend de la complexité de votre projet. Après une analyse approfondie, nous vous proposons un calendrier réaliste et détaillé.',
    },
    {
      question: 'Comment se passe la facturation ?',
      answer: 'Nous proposons plusieurs modèles de facturation : au forfait, à l\'heure ou par jalon selon la nature de votre projet.',
    },
    {
      question: 'Proposez-vous un support après livraison ?',
      answer: 'Oui, nous fournissons un support technique continu, des mises à jour régulières et une assistance utilisateur complète.',
    },
    {
      question: 'Travaillez-vous uniquement au Burkina Faso ?',
      answer: 'Nous sommes basés à Ouagadougou mais travaillons avec des clients dans toute l\'Afrique de l\'Ouest et au-delà.',
    },
    {
      question: 'Comment garantissez-vous la sécurité de nos données ?',
      answer: 'Nous utilisons les meilleures pratiques de sécurité : chiffrement, conformité RGPD, audits réguliers et plans de continuité.',
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
              Voir plus clair, <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">agir plus juste</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
              Partenaire technologique complet pour votre transformation digitale. Solutions logicielles, infrastructures, cybersécurité, automatisation et conseil stratégique pour votre excellence opérationnelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/22677554509?text=Bonjour%20P%C3%A9ratsim%20Innovation%2C%20je%20souhaite%20discuter%20de%20mon%20projet." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700 w-full">
                  Découvrez nos solutions
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://wa.me/22677554509?text=Bonjour%20P%C3%A9ratsim%20Innovation%2C%20je%20souhaite%20une%20consultation%20gratuite." target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900 w-full">
                  Consultation gratuite
                </Button>
              </a>
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
              <p className="text-center text-neutral-400">Logo Pératsim Innovation</p>
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
                    <a href="https://wa.me/22677554509" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm">En savoir plus &rarr;</Button>
                    </a>
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
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold">{sector.title}</h3>
                    {sector.isPriority && (
                      <Badge className="mt-2 bg-secondary-100 text-secondary-700">Secteur prioritaire</Badge>
                    )}
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

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 justify-center" variant="primary">Vos questions</Badge>
            <Heading level={2} className="mb-4">Questions fréquemment posées</Heading>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur nos services et notre approche.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="cursor-pointer hover:bg-neutral-100 transition-colors" onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span className="text-2xl">{expandedFaq === index ? '−' : '+'}</span>
                </div>
                {expandedFaq === index && (
                  <p className="text-neutral-600 mt-4">{item.answer}</p>
                )}
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
          <a href="https://wa.me/22677554509?text=Bonjour%20P%C3%A9ratsim%20Innovation%2C%20je%20souhaite%20d%C3%A9marrer%20un%20projet." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
              Réserver une consultation gratuite
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </Container>
      </section>
    </main>
  );
}
