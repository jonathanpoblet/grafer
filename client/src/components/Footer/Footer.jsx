import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a
          className="footer-links-link"
          href="https://api.whatsapp.com/send?phone=541161489912"
          target="_blank"
        >
          <AiOutlineWhatsApp className="footer-links-link-logo-w" />
        </a>
        <a
          className="footer-links-link"
          href="https://www.instagram.com/lic.grafer_/"
          target="_blank"
        >
          <AiOutlineInstagram className="footer-links-link-logo-ig" />
        </a>
      </div>
      <div className="footer-credits">
        <p className="footer-credits-text">
          © 2023 Copyright: Graciela Fernández
        </p>
        <p className="footer-credits-text">
          Sitio web desarrollado por Jonathan Poblet
        </p>
      </div>
    </div>
  );
}
