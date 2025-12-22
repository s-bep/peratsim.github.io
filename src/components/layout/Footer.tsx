'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/docs/api' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    Resources: [
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'Guides', href: '/resources/guides' },
      { label: 'Webinars', href: '/resources/webinars' },
      { label: 'FAQ', href: '/faq' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/politique-confidentialite' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Legal Mentions', href: '/mentions-legales' },
      { label: 'Cookies', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/peratsim', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/peratsim', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/peratsim', label: 'GitHub' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Restez informé</h3>
            <p className="text-neutral-300 mb-6">
              Recevez les dernières actualités et innovations en IA directement dans votre boîte mail.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email..."
                className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Pératsim</h4>
            <p className="text-neutral-400 text-sm mb-6">
              Solutions d&apos;Intelligence Artificielle de classe mondiale pour l&apos;industrie et l&apos;innovation.
            </p>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+22677554509" className="hover:text-white transition-colors">
                  +226 77 55 45 09
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contact@peratsim.com" className="hover:text-white transition-colors">
                  contact@peratsim.com
                </a>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Ouagadougou, Burkina Faso</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="font-semibold text-sm mb-4 uppercase tracking-wide text-neutral-300">
                {title}
              </h5>
              <ul className="space-y-3 text-sm">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} Pératsim Innovation. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
