import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

import es from '../assets/languages/es.png';
import en from '../assets/languages/en.png';


function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

 const currentFlag = i18n.language === "es" ? es : en;

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="videos" className="logo-text  link" smooth={true} duration={500}>
            Julio Rodriguez
          </Link>
        </div>
        <nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
            <Link to="about" smooth={true} duration={500} className="link">{t("about")}</Link>
            <Link to="projects" smooth={true} duration={500} className="link">{t("projects")}</Link>
            <Link to="contact" smooth={true} duration={500} className="link">{t("contact")}</Link>
            <button className="language-btn" onClick={toggleLanguage}>
            <img src={currentFlag} alt="language" width={35} height={35} />
          </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
