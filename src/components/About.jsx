import './About.css';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t} = useTranslation();
  return (
    <section id="about">
      <div className="container">
        <h2 className="about-title">{t("title-about")}</h2>
        <div className="about-content">
            <p>{t("p1-about")}</p>
            <p>{t("p2-about")}</p>
            <p>{t("p3-about")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
