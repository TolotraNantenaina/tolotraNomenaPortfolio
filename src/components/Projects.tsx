import { Folder, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.pos.title'),
      description: t('projects.pos.description'),
      tags: ['POS', 'Stock Management', 'Invoicing'],
      color: 'garnet',
    },
    {
      title: t('projects.realestate.title'),
      description: t('projects.realestate.description'),
      tags: ['React', 'Mobile', '3D Visualization'],
      color: 'brown',
    },
    {
      title: t('projects.sms.title'),
      description: t('projects.sms.description'),
      tags: ['C', 'Redis', 'High Performance'],
      color: 'midnight',
    },
    {
      title: t('projects.inventory.title'),
      description: t('projects.inventory.description'),
      tags: ['React Native', 'Expo', 'Real-time'],
      color: 'garnet',
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

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
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
                  <button className="text-midnight/60 hover:text-midnight transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>

                <h3 className="text-2xl font-bold text-midnight mb-3 group-hover:text-garnet transition-colors">
                  {project.title}
                </h3>

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
