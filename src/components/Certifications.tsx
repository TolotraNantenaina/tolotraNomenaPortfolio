import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      title: t('certifications.python.title'),
      issuer: t('certifications.python.issuer'),
      date: t('certifications.python.date'),
      skill: 'Python',
      diplomaId: 'RHk75PrCoMAIXmX6ecuR1A',
      color: 'garnet',
    },
    {
      title: t('certifications.javascript.title'),
      issuer: t('certifications.javascript.issuer'),
      date: t('certifications.javascript.date'),
      skill: 'JavaScript',
      diplomaId: 'A9R3teDIRhxsAfi3wtYoRQ',
      color: 'brown',
    },
    {
      title: t('certifications.php.title'),
      issuer: t('certifications.php.issuer'),
      date: t('certifications.php.date'),
      skill: 'PHP',
      diplomaId: '7TQZxAOUosKbMoWrgZUBjQ',
      color: 'midnight',
    },
    {
      title: t('certifications.docker.title'),
      issuer: t('certifications.docker.issuer'),
      date: t('certifications.docker.date'),
      skill: 'Docker',
      diplomaId: null,
      color: 'garnet',
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

  const getBarColorClasses = (color: string) => {
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

  const getIconBgClasses = (color: string) => {
    switch (color) {
      case 'garnet':
        return 'bg-garnet/10 text-garnet';
      case 'brown':
        return 'bg-brown/10 text-brown';
      case 'midnight':
        return 'bg-midnight/10 text-midnight';
      default:
        return 'bg-midnight/10 text-midnight';
    }
  };

  const getDiplomaUrl = (diplomaId: string) => {
    return `https://www.codingame.com/certification/${diplomaId}`;
  };

  return (
    <section id="certifications" className="py-20 bg-beige-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-midnight text-center mb-12">
          {t('certifications.title')}
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`h-2 ${getBarColorClasses(cert.color)} transition-all duration-300`}></div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${getIconBgClasses(cert.color)} rounded-lg flex items-center justify-center`}>
                    <Award size={24} />
                  </div>
                  {cert.diplomaId ? <a
                    href={getDiplomaUrl(cert.diplomaId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-midnight/60 hover:text-midnight transition-colors"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <ExternalLink size={20} />
                  </a> : null}
                </div>

                <h3 className="text-xl font-bold text-midnight mb-2 group-hover:text-garnet transition-colors">
                  {cert.title}
                </h3>

                <p className="text-midnight/60 text-sm mb-4">
                  {cert.issuer}
                </p>

                <p className="text-midnight/50 text-xs mb-4">
                  {cert.date}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(cert.color)}`}>
                    {cert.skill}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
