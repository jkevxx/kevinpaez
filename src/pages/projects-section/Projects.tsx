import { useTranslation } from 'react-i18next';
import Card from '../../components/card/Card';
import { dataProjects } from '../../utils/dataProjects';
import './projects.scss';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h1>{t('projects.title')}</h1>

        <div className="cards">
          {dataProjects.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
