import { Code2, Smartphone, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-beige-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-midnight text-center mb-12">
            {t('about.title')}
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-midnight/80 leading-relaxed mb-8">
              {t('about.description')}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-6 bg-beige rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-garnet rounded-full flex items-center justify-center mb-4">
                  <Code2 className="text-beige" size={32} />
                </div>
                <h3 className="font-semibold text-midnight mb-2">Web Development</h3>
                <p className="text-sm text-midnight/70">Modern & responsive web applications</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-beige rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="text-beige" size={32} />
                </div>
                <h3 className="font-semibold text-midnight mb-2">Mobile Apps</h3>
                <p className="text-sm text-midnight/70">Cross-platform mobile solutions</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-beige rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-midnight rounded-full flex items-center justify-center mb-4">
                  <Server className="text-beige" size={32} />
                </div>
                <h3 className="font-semibold text-midnight mb-2">Backend Systems</h3>
                <p className="text-sm text-midnight/70">Scalable server architectures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
