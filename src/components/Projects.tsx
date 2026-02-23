import { Folder, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.ianah.title'),
      description: t('projects.ianah.description'),
      link: null,
      tags: ['Python', 'AI', 'NLP', 'Malagasy'],
      color: 'garnet',
      github: 'https://github.com/TolotraNantenaina/IA_NAH',
    },
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      link: 'https://tolotra-nomenjanahary.netlify.app/',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      color: 'brown',
      github: 'https://github.com/TolotraNantenaina/tolotraNomenaPortfolio',
    },
    {
      title: t('projects.nearu.title'),
      description: t('projects.nearu.description'),
      link: "https://nearu-overview.netlify.app/",
      tags: ['React Native', 'Expo', 'Real-time', 'Local Network'],
      color: 'midnight',
      github: 'https://github.com/TolotraNantenaina/Nearu',
    },
    {
      title: t('projects.nearutoo.title'),
      description: t('projects.nearutoo.description'),
      link: null,
      tags: ['React Native', 'Expo', 'Real-time', 'Local Network'],
      color: 'garnet',
      github: 'https://github.com/TolotraNantenaina/NearuToo',
    },
    {
      title: t('projects.jobmatch.title'),
      description: t('projects.jobmatch.description'),
      link: "https://jobmatch--stable.expo.app/",
      tags: ['React Native', 'Expo', 'Job Search', 'Matching'],
      color: 'brown',
      github: 'https://github.com/TolotraNantenaina/JobMatch',
    },
    {
      title: t('projects.finapp.title'),
      description: t('projects.finapp.description'),
      link: "https://finapp-101--59d9t4etbs.expo.app/",
      tags: ['React Native', 'Expo', 'Finance', 'Web & Mobile'],
      color: 'midnight',
      github: 'https://github.com/TolotraNantenaina/FinApp',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'garnet':
        return 'bg-garnet hover:bg-garnet-light';
      case 'brown':
        return 'bg-brown hover:bg-brown-light';
      case 'midnight':
        return 'bg-midnight-light hover:bg-midnight';
      default:
        return 'bg-midnight hover:bg-midnight-light';
    }
  };

  return (
    <section id="projects" className="py-20 bg-beige-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-midnight text-center mb-12">
          {t('projects.title')}
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`h-2 ${getColorClasses(project.color)} transition-all duration-300`}></div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-beige rounded-lg flex items-center justify-center">
                    <Folder className="text-midnight" size={24} />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-midnight/60 hover:text-midnight transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-midnight mb-3 group-hover:text-garnet transition-colors block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-garnet"
                    aria-label={`View ${project.title} on website`}
                  >
                    {project.title}
                  </a>
                ) : (
                  <h3 className="text-2xl font-bold text-midnight mb-3 group-hover:text-garnet transition-colors">
                    {project.title}
                  </h3>
                )}

                <p className="text-midnight/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-beige text-midnight text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
