import { useTranslation } from 'react-i18next';
import Form from '../../components/form/Form';
import './contact.scss';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <p>{t('contact.title')}</p>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
