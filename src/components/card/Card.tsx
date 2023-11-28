import { useTranslation } from 'react-i18next';
import GithubSVG from '../../svg/GithubSVG';
import ShareSVG from '../../svg/ShareSVG';
import './card.scss';

type Props = {
  projectImg: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
  technologiesIcons: {
    src: string;
    alt: string;
  }[];
  links: {
    github: string;
    demo: string;
  };
};

const Card = ({
  projectImg,
  title,
  subtitle,
  technologiesIcons,
  links,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className="card">
      <div className="card-image">
        <img src={projectImg.src} alt={projectImg.alt} />
      </div>

      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{subtitle}</p>
      </div>

      <div className="card-techs">
        <h2>{t('projects.card.technologies')}</h2>
        <div className="card-techs-img">
          {technologiesIcons.map((icon) => (
            <img src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>

      <div className="card-buttons">
        <a href={links.github} target="_blank">
          <GithubSVG />
          GitHub
        </a>
        <a href={links.demo} target="_blank">
          <ShareSVG />
          Demo
        </a>
      </div>
    </div>
  );
};

export default Card;
