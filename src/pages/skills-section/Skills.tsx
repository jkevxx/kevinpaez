import { useTranslation } from 'react-i18next';
import Icons from '../../components/icons/Icons';
import { dataBackIcons } from '../../utils/dataBackIcons';
import { dataFrontIcons } from '../../utils/dataFrontIcons';
import './skills.scss';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h1>{t('skills.title')}</h1>

        <div className="front-end">
          <h2>Front-End</h2>
          <Icons dataIcons={dataFrontIcons} />
        </div>

        <div className="back-end">
          <h2>Back-End</h2>
          <Icons dataIcons={dataBackIcons} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
