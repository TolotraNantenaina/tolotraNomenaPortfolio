import { useState } from 'react';
import { Mail, Linkedin, Github, Send, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import Snackbar from './Snackbar';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'tolotrantenaina10@gmail.com',
          time: new Date().toISOString(),
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-beige/5 backdrop-blur-sm rounded-2xl p-6 border border-beige/10">
                <div className="flex items-center space-x-4">
                  <div className="w-[48px] h-[48px] flex-shrink-0 bg-garnet rounded-full flex items-center justify-center">
                    <Mail className="text-beige" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-beige/70 text-sm">{t('contact.email')}</p>
                    <a
                      href="mailto:tolotrantenaina10@gmail.com"
                      className="text-beige hover:text-garnet transition-colors break-words block"
                    >
                      tolotrantenaina10@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-beige/5 backdrop-blur-sm rounded-2xl p-6 border border-beige/10">
                <div className="flex items-center space-x-4">
                  <div className="w-[48px] h-[48px] flex-shrink-0 bg-brown rounded-full flex items-center justify-center">
                    <Linkedin className="text-beige" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-beige/70 text-sm">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/randrianantenaina-tolotra-518214204"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-beige hover:text-brown-light transition-colors break-words block"
                    >
                      linkedin.com/in/randrianantenaina-tolotra-518214204
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-beige/5 backdrop-blur-sm rounded-2xl p-6 border border-beige/10">
                <div className="flex items-center space-x-4">
                  <div className="w-[48px] h-[48px] flex-shrink-0 bg-midnight-light rounded-full flex items-center justify-center">
                    <Github className="text-beige" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-beige/70 text-sm">GitHub</p>
                    <a
                      href="https://github.com/TolotraNantenaina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-beige hover:text-beige-dark transition-colors break-words block"
                    >
                      github.com/TolotraNantenaina
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
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-garnet hover:bg-garnet-light disabled:bg-garnet/50 disabled:cursor-not-allowed text-beige rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>{t('contact.sending')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('contact.send')}</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-4 animate-fadeIn">
                  <CheckCircle size={20} />
                  <p className="text-sm">{t('contact.success')}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4 animate-fadeIn">
                  <AlertCircle size={20} />
                  <p className="text-sm">{t('contact.error')}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-beige/50 text-sm">
        <p>© 2024 RANDRIANANTENAINA Tolotra Nomenjanahary. {t('contact.all_rights_reserved')}</p>
      </footer>

      <Snackbar
        message={submitStatus === 'success' ? t('contact.success') : t('contact.error')}
        type={submitStatus === 'success' ? 'success' : 'error'}
        isVisible={submitStatus !== 'idle'}
        onClose={() => setSubmitStatus('idle')}
        duration={5000}
      />
    </section>
  );
};

export default Contact;
