import './Footer.css'; 
import { useTranslation } from "react-i18next";


import github from '../assets/networks/github.png';
import twitter from '../assets/networks/twitter.png';
import linkedin from '../assets/networks/linkedin.png';
import youtube from '../assets/networks/youtube.png';
import itch from '../assets/networks/itch.png';


const Footer = () => {
  const { t} = useTranslation();

  return (
    <footer>
    <div class="container">
      <div class="social-links">
        <a href="https://github.com/JulioCz36" class="social-icon" target="_blank">
          <img src={github} alt="GitHub"/>
        </a>
        <a href="https://x.com/JulioCzPrograma" class="social-icon" target="_blank">
          <img src={twitter} alt="x"/>
        </a>
        <a href="https://www.linkedin.com/in/julio-c%C3%A9sar-rodriguez-346130248/" class="social-icon" target="_blank">
          <img src={linkedin} alt="linkedin"/>
        </a>
        <a href="https://www.youtube.com/@JulioCz_18" class="social-icon" target="_blank">
          <img src={youtube} alt="youtube" />
        </a>
         <a href="https://juliocz36.itch.io/" class="social-icon" target="_blank">
          <img src={itch} alt="itch"/>
        </a>
      </div>
      <div class="copyright">
        <p>{t("copyright")}</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;