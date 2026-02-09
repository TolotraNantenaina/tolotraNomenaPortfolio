import { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const navItems = [
    { key: 'about', label: t('nav.about') },
    { key: 'skills', label: t('nav.skills') },
    { key: 'experience', label: t('nav.experience') },
    { key: 'projects', label: t('nav.projects') },
    { key: 'education', label: t('nav.education') },
    { key: 'certifications', label: t('nav.certifications') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-midnight/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-beige">
            TN<span className="text-garnet">.</span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="text-beige hover:text-garnet transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-garnet/20 text-beige hover:bg-garnet/30 transition-all duration-200"
            >
              <Languages size={16} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-beige"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="block w-full text-left text-beige hover:text-garnet transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-garnet/20 text-beige hover:bg-garnet/30 transition-all duration-200"
            >
              <Languages size={16} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
