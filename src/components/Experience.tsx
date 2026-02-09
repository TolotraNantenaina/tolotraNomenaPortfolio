import { Briefcase, CheckCircle, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const professionalExperiences = [
    {
      title: t('experience.professional.exp1.title'),
      company: t('experience.professional.exp1.company'),
      period: t('experience.professional.exp1.period'),
      responsibilities: [
        t('experience.professional.exp1.desc1'),
        t('experience.professional.exp1.desc2'),
        t('experience.professional.exp1.desc3'),
        t('experience.professional.exp1.desc4'),
      ],
    },
    {
      title: t('experience.professional.exp2.title'),
      company: t('experience.professional.exp2.company'),
      period: t('experience.professional.exp2.period'),
      responsibilities: [
        t('experience.professional.exp2.desc1'),
        t('experience.professional.exp2.desc2'),
      ],
    },
    {
      title: t('experience.professional.exp3.title'),
      company: t('experience.professional.exp3.company'),
      period: t('experience.professional.exp3.period'),
      responsibilities: [
        t('experience.professional.exp3.desc1'),
        t('experience.professional.exp3.desc2'),
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-midnight via-midnight-light to-midnight">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-beige text-center mb-12">
          {t('experience.title')}
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {professionalExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-beige/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-beige/10 shadow-2xl hover:shadow-garnet/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-garnet rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-beige" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-beige mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-garnet font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center space-x-2 text-beige/70 text-sm">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                {exp.responsibilities.map((responsibility, respIdx) => (
                  <div key={respIdx} className="flex items-start space-x-3 group">
                    <CheckCircle className="text-garnet flex-shrink-0 mt-1 group-hover:text-garnet-light transition-colors" size={20} />
                    <p className="text-beige/90 leading-relaxed group-hover:text-beige transition-colors">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
