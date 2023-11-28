import { useTranslation } from 'react-i18next';

import GithubSVG from '../../svg/GithubSVG';
import LinkedInSVG from '../../svg/LinkedInSVG';
import './home.scss';

const Home = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>{t('home.title')}</h1>
        <h2>{t('home.subtitle')}</h2>

        <div className="contact">
          <a
            className="linkedIn-link"
            href="https://linkedin.com/in/kevin-paez-gallardo"
            target="_blank"
          >
            <LinkedInSVG />
          </a>
          <a
            className="github-link"
            href="https://github.com/jkevxx"
            target="_blank"
          >
            <GithubSVG />
          </a>
          <a className="cv-btn" href="#">
            <p>{t('home.button')}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
