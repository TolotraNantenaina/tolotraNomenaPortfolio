import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-midnight via-midnight-light to-midnight">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-beige text-center mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-beige/70 text-center mb-12">{t('contact.subtitle')}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-beige/5 backdrop-blur-sm rounded-2xl p-6 border border-beige/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-garnet rounded-full flex items-center justify-center">
                    <Mail className="text-beige" size={20} />
                  </div>
                  <div>
                    <p className="text-beige/70 text-sm">{t('contact.email')}</p>
                    <a
                      href="mailto:contact@example.com"
                      className="text-beige hover:text-garnet transition-colors"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-beige/5 backdrop-blur-sm rounded-2xl p-6 border border-beige/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brown rounded-full flex items-center justify-center">
                    <Linkedin className="text-beige" size={20} />
                  </div>
                  <div>
                    <p className="text-beige/70 text-sm">LinkedIn</p>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-beige hover:text-brown-light transition-colors"
                    >
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-beige/5 backdrop-blur-sm rounded-2xl p-6 border border-beige/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-midnight-light rounded-full flex items-center justify-center">
                    <Github className="text-beige" size={20} />
                  </div>
                  <div>
                    <p className="text-beige/70 text-sm">GitHub</p>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-beige hover:text-beige-dark transition-colors"
                    >
                      github.com/yourprofile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.name')}
                  className="w-full px-4 py-3 bg-beige/10 border border-beige/20 rounded-lg text-beige placeholder-beige/50 focus:outline-none focus:border-garnet transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.email')}
                  className="w-full px-4 py-3 bg-beige/10 border border-beige/20 rounded-lg text-beige placeholder-beige/50 focus:outline-none focus:border-garnet transition-colors"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.message')}
                  rows={5}
                  className="w-full px-4 py-3 bg-beige/10 border border-beige/20 rounded-lg text-beige placeholder-beige/50 focus:outline-none focus:border-garnet transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-garnet hover:bg-garnet-light text-beige rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>{t('contact.send')}</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-beige/50 text-sm">
        <p>© 2024 RANDRIANANTENAINA Tolotra Nomenjanahary. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
