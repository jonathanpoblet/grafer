import { AiFillHeart, AiFillFilePdf, AiFillHourglass } from "react-icons/ai";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home-background">
        <img
          className="home-background-img"
          src='https://res.cloudinary.com/dmx8e4tt0/image/upload/v1681247587/grafer-images/hoxpbirkdadyadgh4gz5.png'
          alt="Portada de inicio"
        />
        <h1 className="home-background-title">
          <span className="home-background-title-back">
            Lic. Graciela Fernandez
          </span>
          <br />
          Nutricionista
        </h1>
      </div>
      <div className="home-choseus">
        <h2 className="home-choseus-title">
          ¿Por qué <span className="home-choseus-title-green">elegirnos</span>?
        </h2>
        <div className="home-choseus-container">
          <img
            className="home-choseus-container-img"
            src='https://res.cloudinary.com/dmx8e4tt0/image/upload/v1681303681/grafer-images/yzstc3jr9fk1st9agcid.jpg'
            alt="Imagen porque elegirnos"
          />
          <div className="home-choseus-container-explanation">
            <h3 className="home-choseus-container-explanation-title">
              Pensamos en{" "}
              <span className="home-choseus-container-explanation-title-orange">
                vos
              </span>
            </h3>
            <br />
            <p className="home-choseus-container-explanation-text">
              Creamos los mejores planes alimentarios, e-books, recetarios y
              herramientas para nutricionistas, para que puedas alcanzar tu
              objetivo de llevar una vida más sana y tener un cuerpo saludable.
              <br />
              <br />
              Toda la información a tu alcance para que la aproveches y empieces
              tu cambio ahora mismo. Ante una consulta más personalizada no dudes 
              en escribirme al privado, ya sea via mail, whatsapp o instagram.
            </p>
          </div>
        </div>
      </div>
      <div className="home-information">
        <div className="home-information-container">
          <span className="home-information-container-span">
            <AiFillHeart className="home-information-container-logo" />
          </span>
          <p className="home-information-container-text">
            Planes y herramientas alimentarias creadas por Lic. Graciela
            Fernandez con mucho cariño para que logres tus objetivos.
          </p>
        </div>
        <div className="home-information-container">
          <span className="home-information-container-span-orange">
            <AiFillFilePdf className="home-information-container-logo" />
          </span>
          <p className="home-information-container-text">
            Todos los planes y herramientas los podras descargar en pdf, para
            que tengas la información en todo lugar y momento.
          </p>
        </div>
        <div className="home-information-container">
          <span className="home-information-container-span">
            <AiFillHourglass className="home-information-container-logo" />
          </span>
          <p className="home-information-container-text">
            Nunca es tarde para cuidar tu salud. Implementa estos habitos
            alimenticios para lograr ese cambio que deseas.
          </p>
        </div>
      </div>
      <Link className="home-information-button" to="/herramientas-de-nutricion">
        Herramientas de nutrición
      </Link>
    </div>
  );
}
