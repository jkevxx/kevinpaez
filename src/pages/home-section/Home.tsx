import { useTranslation } from 'react-i18next';

import GithubSVG from '../../svg/GithubSVG';
import LinkedInSVG from '../../svg/LinkedInSVG';
import { photo } from '../../utils/data';
import './home.scss';

const Home = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="content-description">
          <h1>{t('home.title')}</h1>
          <h2>{t('home.subtitle')}</h2>

          <div className="home-contact">
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
            <a className="cv-btn" href={t('home.cvLink')} target="_blank">
              <p>{t('home.button')}</p>
            </a>
          </div>
        </div>
        <figure className="home-photo">
          <img src={photo.src} alt={photo.alt} />
        </figure>
      </div>
    </section>
  );
};

export default Home;
