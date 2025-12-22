import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const siteConfig = {
  name: 'Pératsim Innovation',
  description: 'Solutions IA de classe mondiale',
  url: 'https://www.peratsim.com',
  ogImage: 'https://www.peratsim.com/og.png',
  links: {
    twitter: 'https://twitter.com/peratsim',
    linkedin: 'https://linkedin.com/company/peratsim',
    github: 'https://github.com/peratsim',
  },
  contact: {
    email: 'contact@peratsim.com',
    phone: '+22677554509',
    address: 'Ouagadougou, Burkina Faso',
  },
};

export const navigationConfig = [
  {
    title: 'Solutions',
    href: '/solutions',
  },
  {
    title: 'Tarifs',
    href: '/pricing',
  },
  {
    title: 'Documentation',
    href: '/docs',
  },
  {
    title: 'Ressources',
    href: '/resources',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'À propos',
    href: '/about',
  },
];
