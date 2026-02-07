import { Briefcase, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    t('experience.freelance.desc1'),
    t('experience.freelance.desc2'),
    t('experience.freelance.desc3'),
    t('experience.freelance.desc4'),
    t('experience.freelance.desc5'),
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-midnight via-midnight-light to-midnight">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-beige text-center mb-12">
          {t('experience.title')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-beige/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-beige/10 shadow-2xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-garnet rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="text-beige" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-beige mb-1">
                  {t('experience.freelance.title')}
                </h3>
                <p className="text-garnet font-medium">{t('experience.freelance.type')}</p>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex items-start space-x-3 group">
                  <CheckCircle className="text-garnet flex-shrink-0 mt-1 group-hover:text-garnet-light transition-colors" size={20} />
                  <p className="text-beige/90 leading-relaxed group-hover:text-beige transition-colors">
                    {exp}
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

export default Experience;
