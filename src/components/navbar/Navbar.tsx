import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useMobile from '../../hooks/useMobile';
import i18n from '../../i18n';

import CloseSVG from '../../svg/CloseSVG';
import MenuSVG from '../../svg/MenuSVG';
import './navbar.scss';

const Navbar = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const { isMobile } = useMobile();

  const onClickLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  const handleActive = (section: string) => {
    setActiveSection(section);
    setIsNavbarActive(false);
  };

  return (
    <header>
      <nav className={`navbar ${isNavbarActive ? 'active-navbar' : ''}`}>
        <ul>
          <li>
            <a
              className={activeSection === 'home' ? 'active-section' : ''}
              href="#home"
              onClick={() => handleActive('home')}
            >
              {t('navbar.home')}
            </a>
          </li>

          <li>
            <a
              className={activeSection === 'about' ? 'active-section' : ''}
              href="#about"
              onClick={() => handleActive('about')}
            >
              {t('navbar.about')}
            </a>
          </li>

          <li>
            <a
              className={activeSection === 'skills' ? 'active-section' : ''}
              href="#skills"
              onClick={() => handleActive('skills')}
            >
              {t('navbar.skills')}
            </a>
          </li>

          <li>
            <a
              className={activeSection === 'projects' ? 'active-section' : ''}
              href="#projects"
              onClick={() => handleActive('projects')}
            >
              {t('navbar.projects')}
            </a>
          </li>

          <li>
            <a
              className={activeSection === 'contact' ? 'active-section' : ''}
              href="#contact"
              onClick={() => handleActive('contact')}
            >
              {t('navbar.contact')}
            </a>
          </li>
        </ul>
      </nav>
      <select
        name=""
        id=""
        className="language"
        value={i18n.language}
        onChange={onClickLanguageChange}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>

      {isMobile && (
        <button
          className="btn-menu"
          onClick={() => setIsNavbarActive(!isNavbarActive)}
        >
          {isNavbarActive ? <CloseSVG /> : <MenuSVG />}
        </button>
      )}
    </header>
  );
};

export default Navbar;
