import { useTranslation } from 'react-i18next';
import GithubSVG from '../../svg/GithubSVG';
import LinkedInSVG from '../../svg/LinkedInSVG';
import './footer.scss';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer-contact">
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
      </div>
      <p>{t('footer.title')}</p>
    </footer>
  );
};

export default Footer;
