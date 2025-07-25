import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { scroller } from "react-scroll";
import { useTranslation } from 'react-i18next';
import "./Header.css";

import es from '../assets/languages/es.png';
import en from '../assets/languages/en.png';


function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  const currentFlag = i18n.language === "es" ? es : en;

  const isInVideosSection = () => {
    const videos = document.getElementById("videos");
    if (!videos) return false;

    const rect = videos.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight * 0.5;
  };

  const goToSection = (section) => {

    if (location.pathname === "/") {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: isInVideosSection() ? -320 : -50,
      });
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
    setMenuOpen(false);
  };


  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <button className="logo-text" onClick={() => goToSection("videos")}>
            Julio Rodriguez
          </button>
        </div>
        <nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
            <button onClick={() => goToSection("")} className="link">{t("about")}</button>
            <button onClick={() => goToSection("projects")} className="link">{t("projects")}</button>
            <button onClick={() => goToSection("contact")} className="link">{t("contact")}</button>
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
