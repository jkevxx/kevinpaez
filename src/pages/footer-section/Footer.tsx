import { useTranslation } from 'react-i18next';
import './footer.scss';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>{t('footer.title')}</p>
    </footer>
  );
};

export default Footer;
