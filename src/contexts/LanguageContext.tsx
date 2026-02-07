import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    'hero.title': 'Fullstack Developer',
    'hero.subtitle': 'Software Engineer',
    'hero.description': 'Passionate about building scalable, performant, and user-friendly applications using modern technologies.',
    'hero.viewProjects': 'View Projects',
    'hero.downloadCV': 'Download CV',
    'hero.contactMe': 'Contact Me',

    'about.title': 'About Me',
    'about.description': 'Passionate Fullstack Developer with strong experience in web and mobile application development. Focused on building scalable, performant, and user-friendly systems that solve real-world problems. I thrive on turning complex requirements into elegant solutions.',

    'skills.title': 'Technical Skills',
    'skills.languages': 'Programming Languages',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Databases',
    'skills.tools': 'Tools & DevOps',

    'experience.title': 'Professional Experience',
    'experience.freelance.title': 'Fullstack Developer',
    'experience.freelance.type': 'Freelance',
    'experience.freelance.desc1': 'Design and development of custom business applications',
    'experience.freelance.desc2': 'POS system extensions and custom modules',
    'experience.freelance.desc3': 'Real estate management platform (web & mobile)',
    'experience.freelance.desc4': 'SMS gateway integration with Kannel and Redis',
    'experience.freelance.desc5': 'Backend architecture with NestJS and PostgreSQL',

    'projects.title': 'Featured Projects',
    'projects.pos.title': 'Custom POS Modules',
    'projects.pos.description': 'Comprehensive point-of-sale extensions including stock management, supplier tracking, invoicing system, and employee management modules.',
    'projects.realestate.title': 'Real Estate Platform',
    'projects.realestate.description': 'Web and mobile application for property publication with 3D visualization capabilities and interactive property browsing.',
    'projects.sms.title': 'SMS Billing System',
    'projects.sms.description': 'SMS delivery report interceptor built with C and Redis for high-performance message tracking and billing.',
    'projects.inventory.title': 'Mobile Inventory App',
    'projects.inventory.description': 'Cross-platform inventory management application built with React Native and Expo for real-time stock tracking.',

    'education.title': 'Education',
    'education.degree': 'Computer Science / Software Engineering',
    'education.background': 'Strong academic foundation in computer science with focus on software engineering principles, algorithms, and system design.',

    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Feel free to reach out for collaborations or opportunities',
    'contact.email': 'Email',
    'contact.name': 'Your Name',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.education': 'Formation',
    'nav.contact': 'Contact',

    'hero.title': 'Développeur Fullstack',
    'hero.subtitle': 'Ingénieur Logiciel',
    'hero.description': 'Passionné par la création d\'applications évolutives, performantes et conviviales en utilisant des technologies modernes.',
    'hero.viewProjects': 'Voir les Projets',
    'hero.downloadCV': 'Télécharger le CV',
    'hero.contactMe': 'Me Contacter',

    'about.title': 'À Propos de Moi',
    'about.description': 'Développeur Fullstack passionné avec une solide expérience dans le développement d\'applications web et mobiles. Concentré sur la construction de systèmes évolutifs, performants et conviviaux qui résolvent des problèmes concrets. Je m\'épanouis en transformant des exigences complexes en solutions élégantes.',

    'skills.title': 'Compétences Techniques',
    'skills.languages': 'Langages de Programmation',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Bases de Données',
    'skills.tools': 'Outils & DevOps',

    'experience.title': 'Expérience Professionnelle',
    'experience.freelance.title': 'Développeur Fullstack',
    'experience.freelance.type': 'Freelance',
    'experience.freelance.desc1': 'Conception et développement d\'applications métier personnalisées',
    'experience.freelance.desc2': 'Extensions de système de point de vente et modules personnalisés',
    'experience.freelance.desc3': 'Plateforme de gestion immobilière (web et mobile)',
    'experience.freelance.desc4': 'Intégration de passerelle SMS avec Kannel et Redis',
    'experience.freelance.desc5': 'Architecture backend avec NestJS et PostgreSQL',

    'projects.title': 'Projets Phares',
    'projects.pos.title': 'Modules POS Personnalisés',
    'projects.pos.description': 'Extensions complètes de point de vente incluant la gestion des stocks, le suivi des fournisseurs, le système de facturation et les modules de gestion des employés.',
    'projects.realestate.title': 'Plateforme Immobilière',
    'projects.realestate.description': 'Application web et mobile pour la publication de biens immobiliers avec capacités de visualisation 3D et navigation interactive des propriétés.',
    'projects.sms.title': 'Système de Facturation SMS',
    'projects.sms.description': 'Intercepteur de rapport de livraison SMS construit avec C et Redis pour un suivi et une facturation de messages haute performance.',
    'projects.inventory.title': 'Application d\'Inventaire Mobile',
    'projects.inventory.description': 'Application de gestion d\'inventaire multi-plateforme construite avec React Native et Expo pour le suivi des stocks en temps réel.',

    'education.title': 'Formation',
    'education.degree': 'Informatique / Génie Logiciel',
    'education.background': 'Solide formation académique en informatique avec un accent sur les principes du génie logiciel, les algorithmes et la conception de systèmes.',

    'contact.title': 'Entrez en Contact',
    'contact.subtitle': 'N\'hésitez pas à me contacter pour des collaborations ou des opportunités',
    'contact.email': 'Email',
    'contact.name': 'Votre Nom',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer le Message',
  },
};
