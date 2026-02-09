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
    'nav.certifications': 'Certifications',
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
    'experience.professional.exp1.title': 'Full-Stack Developer',
    'experience.professional.exp1.company': 'Ingenosya Madagascar',
    'experience.professional.exp1.period': 'July 2021 - Present',
    'experience.professional.exp1.desc1': 'Designed and developed comprehensive web applications (front-end and back-end).',
    'experience.professional.exp1.desc2': 'Integrated and deployed management information systems.',
    'experience.professional.exp1.desc3': 'Managed databases and optimized business processes.',
    'experience.professional.exp1.desc4': 'Analyzed data and generated statistical graphs for reporting.',
    'experience.professional.exp2.title': 'Web Development Intern',
    'experience.professional.exp2.company': 'Ingenosya Madagascar',
    'experience.professional.exp2.period': 'February 2021 - July 2021',
    'experience.professional.exp2.desc1': 'Developed and integrated specific web solutions.',
    'experience.professional.exp2.desc2': 'Maintained and enhanced existing applications.',
    'experience.professional.exp3.title': 'Web Development Intern',
    'experience.professional.exp3.company': 'Ministry of Agriculture, Livestock, and Fisheries (M.A.E.P.)',
    'experience.professional.exp3.period': 'March 2020 - June 2020',
    'experience.professional.exp3.desc1': 'Designed and developed a web platform for intervention management.',
    'experience.professional.exp3.desc2': 'Integrated and automated administrative processes.',

    'experience.personal.title': 'Projects',
    'experience.personal.type': 'Personnel',
    'experience.personal.desc1': 'Development of AI training systems for Malagasy language (IA_NAH project)',
    'experience.personal.desc2': 'Financial management application development (FinApp) with web and mobile support',
    'experience.personal.desc3': 'Real-time chat application development (Nearu) for local networks',
    'experience.personal.desc4': 'Multi-platform application development (Android, iOS, Desktop)',

    'projects.title': 'Featured Projects',
    'projects.ianah.title': 'IA_NAH',
    'projects.ianah.description': 'Python project for training AI in Malagasy language. Dedicated to collecting, cleaning, and training language models on Malagasy texts.',
    'projects.portfolio.title': 'tolotraNomenaPortfolio',
    'projects.portfolio.description': 'Modern bilingual portfolio website built with React, TypeScript, and Tailwind CSS.',
    'projects.nearu.title': 'Nearu',
    'projects.nearu.description': 'Modern, real-time chat application that works over local networks without requiring internet connectivity. Built with React Native and Expo.',
    'projects.nearutoo.title': 'NearuToo',
    'projects.nearutoo.description': 'Version 2 of Nearu, improved real-time chat application for local networks.',
    'projects.jobmatch.title': 'JobMatch',
    'projects.jobmatch.description': 'Mobile application developed with React Native (Expo), inspired by LinkedIn and Tinder, reinventing job search through a warm, fluid, and human experience. Highlights user skills and certifications, allowing candidates and employers to meet through an intelligent matching system.',
    'projects.finapp.title': 'FinApp',
    'projects.finapp.description': 'Modern financial management application with both web and mobile support. Version 2 of myFinApp.',

    'education.title': 'Education',
    'education.degree': 'Computer Science / Software Engineering',
    'education.background': 'Strong academic foundation in computer science with focus on software engineering principles, algorithms, and system design.',
    'education.formation1': 'Docker Formation',
    'education.formation1_background': 'Docker Formation for learning to use Docker, managing images and creating containers. This is a training leading to a Docker Certification.',

    'certifications.title': 'Certifications',
    'certifications.python.title': 'Certification CodinGame - Python 3',
    'certifications.python.issuer': 'CodinGame',
    'certifications.python.date': 'Issued in November 2025',
    'certifications.javascript.title': 'Certification CodinGame - JavaScript',
    'certifications.javascript.issuer': 'CodinGame',
    'certifications.javascript.date': 'Issued in October 2025',
    'certifications.php.title': 'Certification CodinGame - PHP',
    'certifications.php.issuer': 'CodinGame',
    'certifications.php.date': 'Issued in October 2025',
    'certifications.docker.title': 'Certification Docker - ESTI Madagascar',
    'certifications.docker.issuer': 'ESTI',
    'certifications.docker.date': 'Issued in September 2023',

    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Feel free to reach out for collaborations or opportunities',
    'contact.email': 'Email',
    'contact.name': 'Your Name',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.all_rights_reserved': 'All rights reserved.',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.education': 'Formation',
    'nav.certifications': 'Certifications',
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
    'experience.professional.exp1.title': 'Développeur Full-Stack',
    'experience.professional.exp1.company': 'Ingenosya Madagascar',
    'experience.professional.exp1.period': 'Juillet 2021 – Présent',
    'experience.professional.exp1.desc1': 'Conception et développement d\'applications web complètes (front-end et back-end).',
    'experience.professional.exp1.desc2': 'Intégration et déploiement de systèmes d\'information de gestion.',
    'experience.professional.exp1.desc3': 'Administration et gestion des bases de données et des processus métier.',
    'experience.professional.exp1.desc4': 'Analyse de données et génération de graphiques statistiques pour le reporting.',
    'experience.professional.exp2.title': 'Stagiaire en Développement Web',
    'experience.professional.exp2.company': 'Ingenosya Madagascar',
    'experience.professional.exp2.period': 'Février 2021 – Juillet 2021',
    'experience.professional.exp2.desc1': 'Développement et intégration de solutions web spécifiques.',
    'experience.professional.exp2.desc2': 'Maintenance et amélioration des applications existantes.',
    'experience.professional.exp3.title': 'Stagiaire en Développement Web',
    'experience.professional.exp3.company': 'Ministère de l\'Agriculture, de l\'Élevage et de la Pêche (M.A.E.P.)',
    'experience.professional.exp3.period': 'Mars 2020 – Juin 2020',
    'experience.professional.exp3.desc1': 'Conception et développement d\'une plateforme web pour la gestion des interventions.',
    'experience.professional.exp3.desc2': 'Intégration et automatisation des processus administratifs.',

    'experience.personal.title': 'Projets',
    'experience.personal.type': 'Personnel',
    'experience.personal.desc1': 'Développement de systèmes d\'entraînement d\'IA pour la langue malagasy (projet IA_NAH)',
    'experience.personal.desc2': 'Développement d\'application de gestion financière (FinApp) avec support web et mobile',
    'experience.personal.desc3': 'Développement d\'application de chat en temps réel (Nearu) pour réseaux locaux',
    'experience.personal.desc4': 'Développement d\'applications multi-plateformes (Android, iOS, Desktop)',
    
    'projects.title': 'Projets Phares',
    'projects.ianah.title': 'IA_NAH',
    'projects.ianah.description': 'Projet Python pour l\'entraînement d\'une IA en langue malagasy. Dédié à la collecte, au nettoyage et à l\'entraînement de modèles de langage sur des textes en malgache.',
    'projects.portfolio.title': 'tolotraNomenaPortfolio',
    'projects.portfolio.description': 'Site web portfolio bilingue moderne construit avec React, TypeScript et Tailwind CSS.',
    'projects.nearu.title': 'Nearu',
    'projects.nearu.description': 'Application de chat en temps réel moderne qui fonctionne sur les réseaux locaux sans nécessiter de connexion Internet. Construite avec React Native et Expo.',
    'projects.nearutoo.title': 'NearuToo',
    'projects.nearutoo.description': 'Version 2 de Nearu, application de chat en temps réel améliorée pour les réseaux locaux.',
    'projects.jobmatch.title': 'JobMatch',
    'projects.jobmatch.description': 'Application mobile développée avec React Native (Expo), inspirée de LinkedIn et Tinder, qui réinvente la recherche d\'emploi à travers une expérience chaleureuse, fluide et humaine. Met en avant les compétences et certifications des utilisateurs et permet aux candidats et employeurs de se rencontrer via un système de matchs intelligents.',
    'projects.finapp.title': 'FinApp',
    'projects.finapp.description': 'Application moderne de gestion financière avec support web et mobile. Version 2 de myFinApp.',

    'education.title': 'Formation',
    'education.degree': 'Informatique / Génie Logiciel',
    'education.background': 'Solide formation académique en informatique avec un accent sur les principes du génie logiciel, les algorithmes et la conception de systèmes.',
    'education.formation1': 'Formation Docker',
    'education.formation1_background': 'Formation Docker pour apprendre à utiliser Docker, à gérer des images et à créer des conteneurs. C\'est une formation aboutissant à une Certification Docker.',

    'certifications.title': 'Certifications',
    'certifications.python.title': 'Certification CodinGame - Python 3',
    'certifications.python.issuer': 'CodinGame',
    'certifications.python.date': 'Émise en novembre 2025',
    'certifications.javascript.title': 'Certification CodinGame - JavaScript',
    'certifications.javascript.issuer': 'CodinGame',
    'certifications.javascript.date': 'Émise en octobre 2025',
    'certifications.php.title': 'Certification CodinGame - PHP',
    'certifications.php.issuer': 'CodinGame',
    'certifications.php.date': 'Émise en octobre 2025',
    'certifications.docker.title': 'Certification Docker - ESTI Madagascar',
    'certifications.docker.issuer': 'ESTI',
    'certifications.docker.date': 'Émise en septembre 2023',

    'contact.title': 'Entrez en Contact',
    'contact.subtitle': 'N\'hésitez pas à me contacter pour des collaborations ou des opportunités',
    'contact.email': 'Email',
    'contact.name': 'Votre Nom',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer le Message',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé avec succès ! Je vous répondrai bientôt.',
    'contact.error': 'Échec de l\'envoi du message. Veuillez réessayer ou me contacter directement par email.',
    'contact.all_rights_reserved': 'Tous droits réservés.',
  },
};
