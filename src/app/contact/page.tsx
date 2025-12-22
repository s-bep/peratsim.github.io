'use client';

import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+226 77 55 45 09',
      href: 'tel:+22677554509',
      description: 'Appelez-nous pour une conversation rapide',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@peratsim.com',
      href: 'mailto:contact@peratsim.com',
      description: 'Envoyez-nous un message pour une demande formelle',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Ouagadougou, Burkina Faso',
      description: 'Visitez notre siège social',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+226 77 55 45 09',
      href: 'https://wa.me/22677554509',
      description: 'Discutez en direct sur WhatsApp',
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
              Nous Contacter
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Parlons de votre <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">projet</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300">
              Notre équipe est prête à vous aider. Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons transformer votre vision en réalité.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-6 justify-center" variant="primary">Moyens de contact</Badge>
            <Heading level={2} className="mb-4">Nous sommes à votre écoute</Heading>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} hover className="flex flex-col h-full text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-neutral-600 text-sm flex-1 mb-4">{method.description}</p>
                  {method.href ? (
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      <p className="font-semibold text-primary-600 hover:text-primary-700">{method.value}</p>
                    </a>
                  ) : (
                    <p className="font-semibold text-neutral-700">{method.value}</p>
                  )}
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Heading level={3} className="mb-6">Envoyez-nous un message</Heading>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    placeholder="Votre entreprise"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre projet..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <a 
                  href={`https://wa.me/22677554509?text=Bonjour%20P%C3%A9ratsim%2C%0ANom%3A%20${formData.name}%0AEmail%3A%20${formData.email}%0AEntreprise%3A%20${formData.company}%0AMessage%3A%20${formData.message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full bg-primary-600 hover:bg-primary-700">
                    Envoyer via WhatsApp
                    <Send className="w-5 h-5" />
                  </Button>
                </a>
              </form>
            </div>

            {/* Info */}
            <div>
              <Heading level={3} className="mb-6">Informations utiles</Heading>
              
              <Card className="mb-6 bg-white">
                <h4 className="font-semibold text-lg mb-3">Horaires de travail</h4>
                <div className="space-y-2 text-neutral-600">
                  <p>Lundi - Vendredi: 08:00 - 18:00 GMT</p>
                  <p>Samedi: 09:00 - 13:00 GMT</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </Card>

              <Card className="mb-6 bg-white">
                <h4 className="font-semibold text-lg mb-3">Délais de réponse</h4>
                <p className="text-neutral-600 mb-3">
                  Nous nous engageons à répondre à toutes les demandes dans les délais suivants:
                </p>
                <ul className="space-y-2 text-neutral-600 text-sm">
                  <li>• <strong>WhatsApp:</strong> Dans l\'heure (horaires de travail)</li>
                  <li>• <strong>Email:</strong> Dans les 24 heures</li>
                  <li>• <strong>Téléphone:</strong> Appels entrants acceptés en direct</li>
                </ul>
              </Card>

              <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
                <h4 className="font-semibold text-lg mb-3">Consultation gratuite</h4>
                <p className="text-neutral-600 mb-4">
                  Offrez-vous une première consultation avec nos experts pour explorer vos opportunités d\'innovation.
                </p>
                <a href="https://wa.me/22677554509?text=Je%20souhaite%20une%20consultation%20gratuite" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    Réserver une consultation
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <Heading level={2} className="text-center mb-12">Notre siège social</Heading>
          <div className="rounded-2xl overflow-hidden bg-neutral-200 h-96">
            <div className="w-full h-full flex items-center justify-center bg-neutral-100">
              <p className="text-neutral-500">Ouagadougou, Burkina Faso</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
