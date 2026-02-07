import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-midnight text-center mb-12">
          {t('education.title')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-beige to-beige-dark rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-garnet rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-beige" size={32} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-midnight mb-3">
                  {t('education.degree')}
                </h3>
                <p className="text-midnight/80 leading-relaxed">
                  {t('education.background')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
