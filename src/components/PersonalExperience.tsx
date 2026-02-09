import { Code, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PersonalExperience = () => {
  const { t } = useLanguage();

  const personalProjects = [
    t('experience.personal.desc1'),
    t('experience.personal.desc2'),
    t('experience.personal.desc3'),
    t('experience.personal.desc4'),
  ];

  return (
    <section id="personal-experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-midnight text-center mb-12">
          {t('experience.personal.title')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-beige to-beige-dark rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center flex-shrink-0">
                <Code className="text-beige" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-midnight mb-1">
                  {t('experience.personal.title')}
                </h3>
                <p className="text-brown font-medium">{t('experience.personal.type')}</p>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              {personalProjects.map((project, idx) => (
                <div key={idx} className="flex items-start space-x-3 group">
                  <CheckCircle className="text-brown flex-shrink-0 mt-1 group-hover:text-brown-light transition-colors" size={20} />
                  <p className="text-midnight/80 leading-relaxed group-hover:text-midnight transition-colors">
                    {project}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalExperience;
