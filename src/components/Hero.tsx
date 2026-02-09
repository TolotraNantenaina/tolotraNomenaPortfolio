import { ArrowDown, Download, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import profilePhoto from '../assets/profile-photo.png';

const Hero = () => {
  const { t, language } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const cvFileName = language === 'fr' 
      ? 'cv-tolotra-nomenjanahary-fr.pdf' 
      : 'cv-tolotra-nomenjanahary-en.pdf';
    const downloadFileName = language === 'fr'
      ? 'CV_Tolotra_Nomenjanahary_FR.pdf'
      : 'CV_Tolotra_Nomenjanahary_EN.pdf';
    
    const cvUrl = `/${cvFileName}`;
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-midnight via-midnight-light to-midnight relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-garnet rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brown rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fadeIn">
            <div className="mb-8 flex justify-center">
              <div className="relative profile-photo-container">
                <img
                  src={profilePhoto}
                  alt="Tolotra Nomenjanahary"
                  className="profile-photo-oval"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-beige mb-4 scrollable-name">
              RANDRIANANTENAINA
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-beige mb-2">
              Tolotra Nomenjanahary
            </h2>
            <div className="flex items-center justify-center space-x-3 mt-6">
              <div className="h-px w-12 bg-garnet"></div>
              <p className="text-xl md:text-2xl text-garnet font-medium">
                {t('hero.title')}
              </p>
              <div className="h-px w-12 bg-garnet"></div>
            </div>
            <p className="text-lg md:text-xl text-beige-dark mt-2">
              {t('hero.subtitle')}
            </p>
          </div>

          <p className="text-lg md:text-xl text-beige/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeIn">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-garnet hover:bg-garnet-light text-beige rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-garnet/50"
            >
              {t('hero.viewProjects')}
            </button>

            <button
              onClick={handleDownloadCV}
              className="px-8 py-3 bg-brown hover:bg-brown-light text-beige rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brown/50 flex items-center space-x-2"
            >
              <Download size={20} />
              <span>{t('hero.downloadCV')}</span>
            </button>

            <button
              onClick={scrollToContact}
              className="px-8 py-3 border-2 border-beige hover:bg-beige hover:text-midnight text-beige rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>{t('hero.contactMe')}</span>
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-beige/50" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
