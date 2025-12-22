'use client';

import { ArrowRight, Code, Shield, Zap, Cpu, BookOpen, Network, Check } from 'lucide-react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Badge from '@/components/Badge';

export default function Services() {
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
      cta: 'Découvrir le développement logiciel',
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
      cta: 'Explorer la cybersécurité',
    },
    {
      icon: Zap,
      title: 'Automatisation & Robotique',
      description: 'Nous développons et déployons des solutions d\'automatisation et de robotique pour optimiser vos processus industriels.',
      features: [
        'Robots industriels et collaboratifs',
        'Drones pour inspection et surveillance',
        'Systèmes robotisés sur mesure',
        'Solutions d\'automatisation des processus',
        'Robotique pour l\'agriculture de précision',
      ],
      cta: 'En savoir plus sur l\'automatisation',
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
      cta: 'Découvrir nos services de consulting',
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
      cta: 'Consulter nos programmes de formation',
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
      cta: 'Explorer les infrastructures réseaux',
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
              Nos Services
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Un écosystème complet pour votre <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">transformation digitale</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300">
              Six domaines d&apos;expertise pour couvrir tous vos besoins technologiques et stratégiques.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary-600" />
                          </div>
                          <h2 className="text-3xl font-bold">{service.title}</h2>
                        </div>
                        <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                              <span className="text-neutral-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a href="https://wa.me/22677554509" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-primary-600 hover:bg-primary-700">
                            {service.cta}
                            <ArrowRight className="w-5 h-5" />
                          </Button>
                        </a>
                      </div>
                      <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                        <Icon className="w-32 h-32 text-primary-300" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                        <Icon className="w-32 h-32 text-primary-300" />
                      </div>
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary-600" />
                          </div>
                          <h2 className="text-3xl font-bold">{service.title}</h2>
                        </div>
                        <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                              <span className="text-neutral-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a href="https://wa.me/22677554509" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-primary-600 hover:bg-primary-700">
                            {service.cta}
                            <ArrowRight className="w-5 h-5" />
                          </Button>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white">
        <Container className="text-center max-w-2xl mx-auto">
          <Heading level={2} className="text-white mb-4">
            Besoin d&apos;un service spécifique ?
          </Heading>
          <p className="text-primary-100 text-lg mb-8">
            Notre équipe d&apos;experts est prête à discuter de vos besoins spécifiques et à proposer des solutions sur mesure.
          </p>
          <a href="https://wa.me/22677554509?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
              Prenez rendez-vous gratuitement
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </Container>
      </section>
    </main>
  );
}
