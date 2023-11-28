import { useTranslation } from 'react-i18next';
import './about.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h1>{t('about.title')}</h1>
        <p>{t('about.subtitle')}</p>
        <p>{t('about.experience')}</p>
        <p>{t('about.final-subtitle')}</p>
      </div>
    </section>
  );
};

export default About;
