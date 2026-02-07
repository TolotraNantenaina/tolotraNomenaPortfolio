import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.languages'),
      skills: ['JavaScript', 'TypeScript', 'C#', 'C', 'SQL'],
      color: 'garnet',
    },
    {
      title: t('skills.frontend'),
      skills: ['React', 'React Native', 'Expo', 'Vue.js', 'Blazor'],
      color: 'brown',
    },
    {
      title: t('skills.backend'),
      skills: ['Node.js', 'NestJS', '.NET', 'CodeIgniter 3'],
      color: 'midnight',
    },
    {
      title: t('skills.databases'),
      skills: ['PostgreSQL', 'MySQL 5.7', 'SQLite', 'Redis', 'RxDB'],
      color: 'garnet',
    },
    {
      title: t('skills.tools'),
      skills: ['Git', 'Docker', 'Nginx', 'Apache2', 'Linux Server'],
      color: 'brown',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'garnet':
        return 'bg-garnet/10 text-garnet border-garnet/20';
      case 'brown':
        return 'bg-brown/10 text-brown border-brown/20';
      case 'midnight':
        return 'bg-midnight/10 text-midnight border-midnight/20';
      default:
        return 'bg-midnight/10 text-midnight border-midnight/20';
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-midnight text-center mb-12">
          {t('skills.title')}
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-beige-light rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-midnight mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${getColorClasses(
                      category.color
                    )} transition-all duration-200 hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
