import type { Metadata } from 'next';
import { Users, Target, Zap, Award } from 'lucide-react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Découvrez la mission, la vision et les valeurs de Pératsim Innovation.',
};

export default function AboutPage() {
  const team = [
    {
      name: 'Dr. Youssouf Cissé',
      role: 'Fondateur & CEO',
      bio: 'Expert en IA avec 15 ans d\'expérience dans l\'innovation technologique.',
      avatar: '👨‍🔬',
    },
    {
      name: 'Mariam Traoré',
      role: 'CTO',
      bio: 'Architecte système spécialisée en solutions cloud et infrastructure.',
      avatar: '👩‍💻',
    },
    {
      name: 'Kassoum Diallo',
      role: 'Head of Solutions',
      bio: 'Consultant stratégique avec expertise en transformation digitale.',
      avatar: '👨‍💼',
    },
    {
      name: 'Fatoumata Keita',
      role: 'Head of Research',
      bio: 'Chercheuse en IA et machine learning, publications internationales.',
      avatar: '👩‍🔬',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous nous engageons à fournir les solutions de plus haute qualité.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Repousser les limites de ce qui est possible avec la technologie.',
    },
    {
      icon: Users,
      title: 'Impact',
      description: 'Créer un changement positif durable pour nos clients et la société.',
    },
    {
      icon: Award,
      title: 'Intégrité',
      description: 'Fonctionner avec transparence et responsabilité éthique.',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 justify-center">Notre Histoire</Badge>
            <Heading level={1} className="mb-6">
              Pératsim Innovation : Partenaire technologique stratégique
            </Heading>
            <p className="text-xl text-neutral-600 mb-8">
              Depuis notre création, nous accompagnons les entreprises africaines dans leur transformation
              digitale et leur adoption de l&apos;Intelligence Artificielle.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Notre Mission</Badge>
              <Heading level={2} className="mb-6">
                Démocratiser l&apos;IA en Afrique
              </Heading>
              <p className="text-lg text-neutral-600 mb-4">
                Nous croyons que chaque entreprise, quel que soit sa taille ou son secteur, mérite l&apos;accès
                à des solutions d&apos;IA de classe mondiale.
              </p>
              <p className="text-lg text-neutral-600">
                Notre mission est de rendre l&apos;innovation technologique accessible, abordable et impactante
                pour les entrepreneurs africains.
              </p>
            </div>
            <Card elevated className="bg-primary-50 border-primary-200">
              <Heading level={3} className="text-primary-600 mb-4">
                Notre Vision
              </Heading>
              <p className="text-neutral-700">
                &quot;Positionner l&apos;Afrique comme leader continental en innovation technologique et IA,
                en créant des solutions qui transforment les industries, créent des emplois et résolvent les
                défis sociaux.&quot;
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              Nos Valeurs Fondamentales
            </Heading>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Les principes qui guident chaque décision et chaque projet.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} hover>
                  <Icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 justify-center">Notre Équipe</Badge>
            <Heading level={2} className="mb-4">
              Experts passionnés par l&apos;innovation
            </Heading>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-secondary-50">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              Notre Trajectoire
            </Heading>
          </div>

          <div className="space-y-8 max-w-2xl mx-auto">
            {[
              { year: '2008', title: 'Fondation', description: 'Création de Pératsim Innovation' },
              {
                year: '2015',
                title: 'Expansion',
                description: 'Extension aux marchés ouest-africains',
              },
              {
                year: '2020',
                title: 'Leadership IA',
                description: 'Lancement du premier centre IA d\'excellence régional',
              },
              {
                year: '2025',
                title: 'Vision 2030',
                description: 'Plateforme globale avec 50+ projets livrés',
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full" />
                  {index < 3 && <div className="w-1 h-20 bg-primary-200 mt-2" />}
                </div>
                <div>
                  <p className="text-primary-600 font-bold text-lg">{milestone.year}</p>
                  <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                  <p className="text-neutral-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Projets réussis', value: '50+' },
              { label: 'Clients satisfaits', value: '150+' },
              { label: 'Employés experts', value: '30+' },
              { label: 'Ans d\'expérience', value: '15+' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <p className="text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <Container className="text-center max-w-2xl">
          <Heading level={2} className="text-white mb-4">
            Rejoignez notre communauté
          </Heading>
          <p className="text-primary-100 text-lg mb-8">
            Que vous soyez client, partenaire ou talentieux passionné par l&apos;IA, nous aimerions vous
            entendre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Nous contacter
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Consultez les offres d&apos;emploi
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
