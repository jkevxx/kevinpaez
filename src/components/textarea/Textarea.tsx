import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './textarea.scss';

type Props = {
  value: string;
  isEmpty: boolean | undefined;
  /* eslint-disable-next-line no-unused-vars */
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({ value, isEmpty, onChange }: Props) => {
  const [focused, setFocused] = useState(false);
  const { t } = useTranslation();

  const handleFocus = () => {
    setFocused(true);
  };

  useEffect(() => {
    if (isEmpty) {
      setFocused(true);
    } else {
      setFocused(false);
    }
    // console.log('input empty', isEmpty);
  }, [isEmpty]);

  return (
    <div>
      <label htmlFor="message">{t('contact.form.message.label')}</label>
      <textarea
        id="message"
        name="message"
        value={value}
        placeholder={t('contact.form.message.placeholder')}
        onChange={onChange}
        onBlur={handleFocus}
        data-focused={focused.toString()}
      ></textarea>
      <span
        className={`error-message ${focused ? 'error-message-focused' : ''}`}
      >
        {t('contact.form.message.errorMessage')}
      </span>
    </div>
  );
};

export default Textarea;
