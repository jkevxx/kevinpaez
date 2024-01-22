import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';
import './form.scss';

type formProps = {
  // name: string;
  // email: string;
  // message: string;
  [key: string]: string;
};

const formValues: formProps = {
  name: '',
  email: '',
  message: '',
};

const Form = () => {
  const [values, setValues] = useState(formValues);
  const [isEmpty, setIsEmpty] = useState<boolean>();

  const { t } = useTranslation();

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: t('contact.form.name.placeholder'),
      errorMessage: t('contact.form.name.errorMessage'),
      label: t('contact.form.name.label'),
      pattern: "^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$",
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: t('contact.form.email.placeholder'),
      errorMessage: t('contact.form.email.errorMessage'),
      label: t('contact.form.email.label'),
      required: true,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.name == '' || values.email == '' || values.message == '') {
      setIsEmpty(true);
      // console.log('empty form', isEmpty);
    } else {
      setValues(formValues);
      setIsEmpty(false);
      // console.log(values);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete={'off'}>
      {inputs.map((input) => (
        <Input
          key={input.id}
          {...input}
          value={values[input.name]}
          isEmpty={isEmpty}
          onChange={handleChange}
        />
      ))}

      <Textarea
        value={values.message}
        isEmpty={isEmpty}
        onChange={handleTextAreaChange}
      />

      <button type="submit" className="form-btn">
        {t('contact.form.button')}
      </button>
    </form>
  );
};

export default Form;
