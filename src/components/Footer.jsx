import './Footer.css'; 
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t} = useTranslation();

  return (
    <footer>
    <div class="container">
      <div class="social-links">
        <a href="https://github.com/JulioCz36" class="social-icon" target="_blank">
          <img src="./src/assets/networks/github.png" alt="GitHub"/>
        </a>
        <a href="https://x.com/JulioCzPrograma" class="social-icon" target="_blank">
          <img src="./src/assets/networks/twitter.png" alt="x"/>
        </a>
        <a href="https://www.linkedin.com/in/julio-c%C3%A9sar-rodriguez-346130248/" class="social-icon" target="_blank">
          <img src="./src/assets/networks/linkedin.png" alt="linkedin"/>
        </a>
        <a href="https://www.youtube.com/@JulioCz_18" class="social-icon" target="_blank">
          <img src="./src/assets/networks/youtube.png" alt="youtube" />
        </a>
         <a href="https://juliocz36.itch.io/" class="social-icon" target="_blank">
          <img src="./src/assets/networks/itch.png" alt="itch"/>
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