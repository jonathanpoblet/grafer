import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from "../../assets/logo.svg";
import "./header.css";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="header">
      <div className="header-top">
        <p className="header-top-message">
          Para atención personalizada comunicarse al +54 9 11 6148 9912
        </p>
      </div>
      <div className="header-navigate">
        <Link to="/">
          <img className="header-navigate-logo" src={Logo} alt="Logo" />
        </Link>
        <div className="header-navigate-nav">
          <Link className="header-navigate-nav-link" to="/">
            Inicio
          </Link>
          <Link className="header-navigate-nav-link" to="/sobre-mi">
            Sobre mí
          </Link>
          <Link
            className="header-navigate-nav-link-green"
            to="/herramientas-de-nutricion"
          >
            Herramientas de nutrición
          </Link>
          <Link className="header-navigate-nav-link-orange" to="/contacto">
            Contacto
          </Link>
        </div>
        {!openMenu ? (
          <AiOutlineMenu
            onClick={() => setOpenMenu(!openMenu)}
            className="header-navigate-mobile-nav-menu"
          />
        ) : (
          <MdOutlineKeyboardArrowDown
            onClick={() => setOpenMenu(!openMenu)}
            className="header-navigate-mobile-nav-menu"
          />
        )}
      </div>
      {openMenu && (
        <div className="header-navigate-mobile-nav">
          <Link
            onClick={() => setOpenMenu(!openMenu)}
            className="header-navigate-mobile-nav-link1"
            to="/"
          >
            Inicio
          </Link>
          <Link
            onClick={() => setOpenMenu(!openMenu)}
            className="header-navigate-mobile-nav-link2"
            to="/sobre-mi"
          >
            Sobre mí
          </Link>
          <Link
            onClick={() => setOpenMenu(!openMenu)}
            className="header-navigate-mobile-nav-link1"
            to="/herramientas-de-nutricion"
          >
            Herramientas de nutrición
          </Link>
          <Link
            onClick={() => setOpenMenu(!openMenu)}
            className="header-navigate-mobile-nav-link2"
            to="/contacto"
          >
            Contacto
          </Link>
        </div>
      )}
    </div>
  );
}
