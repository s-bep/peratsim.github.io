'use client';

import { Users, Target, Zap, Award, Code, Shield, Network } from 'lucide-react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export default function About() {
  const team = [
    {
      role: 'Direction',
      icon: Target,
      description: 'Leadership et vision stratégique pour la croissance et l\'innovation',
    },
    {
      role: 'Développement',
      icon: Code,
      description: 'Experts en technologies modernes et développement d\'applications',
    },
    {
      role: 'Cybersécurité',
      icon: Shield,
      description: 'Spécialistes en protection des données et sécurité informatique',
    },
    {
      role: 'Infrastructure',
      icon: Network,
      description: 'Ingénieurs réseaux et systèmes pour vos infrastructures critiques',
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'Nous nous engageons à fournir des solutions de qualité premium',
      icon: Award,
    },
    {
      title: 'Innovation',
      description: 'Utilisation des technologies avancées pour créer des solutions futures',
      icon: Zap,
    },
    {
      title: 'Partenariat',
      description: 'Votre succès est notre succès - approche collaborative et transparente',
      icon: Users,
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
              Qui nous sommes
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pératsim Innovation, votre <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">partenaire technologique</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300">
              Depuis sa fondation, Pératsim Innovation accompagne les entreprises africaines dans leur transformation digitale et leur innovation stratégique.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="primary">Notre histoire</Badge>
              <Heading level={2} className="mb-6">Fondée sur une vision claire</Heading>
              
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Pératsim Innovation a été créée par des experts en technologies avancées partageant une conviction commune: l\'Afrique peut devenir un leader en innovation technologique.
              </p>

              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Basés à Ouagadougou au Burkina Faso, nous servons des clients à travers l\'Afrique de l\'Ouest, apportant des solutions technologiques de classe mondiale adaptées aux contextes locaux.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-900 mb-2">50+ projets réussis</p>
                  <p className="text-neutral-600">Clients satisfaits à travers l\'Afrique de l\'Ouest</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-2">Expertise pluridisciplinaire</p>
                  <p className="text-neutral-600">6 domaines d\'expertise pour couvrir vos besoins</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <Heading level={3} className="text-center text-neutral-400">Image équipe Pératsim</Heading>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">Notre mission et vision</Heading>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Guidés par nos valeurs fondamentales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card elevated className="bg-white">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Notre Mission</h3>
              <p className="text-neutral-600 text-lg">
                Optimiser vos processus par des solutions technologiques innovantes, créant une réelle valeur pour votre entreprise.
              </p>
            </Card>

            <Card elevated className="bg-white">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Notre Vision</h3>
              <p className="text-neutral-600 text-lg">
                Accompagner durablement votre croissance par l\'innovation, en restant à la pointe de la technologie.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 justify-center" variant="primary">Nos valeurs</Badge>
            <Heading level={2} className="mb-4">Ce qui nous guide</Heading>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} hover elevated className="flex flex-col h-full text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-neutral-600 flex-1">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 justify-center" variant="secondary">Notre équipe</Badge>
            <Heading level={2} className="mb-4">Des experts à votre service</Heading>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Une équipe multidisciplinaire composée de professionnels passionnés et expérimentés
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <Card key={index} hover className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{member.role}</h3>
                    <p className="text-neutral-600">{member.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white">
        <Container className="text-center max-w-2xl mx-auto">
          <Heading level={2} className="text-white mb-4">
            Prêt à nous rejoindre dans cette aventure ?
          </Heading>
          <p className="text-primary-100 text-lg mb-8">
            Contactez-nous pour discuter de comment Pératsim peut transformer votre entreprise.
          </p>
          <a href="https://wa.me/22677554509?text=Bonjour%20P%C3%A9ratsim%20Innovation%2C%20j%27aimerais%20d%C3%A9marrer%20un%20projet" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
              Contactez-nous
            </Button>
          </a>
        </Container>
      </section>
    </main>
  );
}
